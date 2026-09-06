# Windows vault 链接维护

`main` 是原始笔记分支，`windows-compatible-paths` 是生成分支。Windows 兼容需要同时处理文件名和引用目标；仅创建分支或重命名文件不足以完成转换。

## 同步与手动修改

笔记可以在 Windows 分支上手动编辑并提交。同步将“上次同步的 main 内容”“当前 Windows 内容”“新的 main 内容”进行三方合并，三个版本先使用同一套规则修复链接并统一换行符。合并基线始终来自原始 main，避免把先前保留下来的 Windows 手动修改误当作可被覆盖的生成内容。

独立修改自动合并；同一处内容冲突、修改与删除冲突、同名新增或二进制冲突会在写入任何同步文件之前停止。失败时不推进同步状态，也不推送。解决冲突后重新运行工作流。同步要求目标工作区干净。

自动提交以 Windows 分支的当前提交为父提交，使用普通 fast-forward push。运行期间若有人向该分支提交，推送会被拒绝，保留远端新提交；重新运行工作流即可基于新的分支头处理。工作流不使用 force push 或 reset 分支历史。

`Assets/Scripts/` 和 `.github/` 中的工具、映射及工作流由 main 维护，Windows 分支只保留其生成副本。`.github/windows-sync-state.json` 由同步程序维护，不应手动修改。诊断报告、测试工作区和发布补丁均保存在被忽略的 `Assets/Reports/`，不提交到 GitHub。

## 日常检查与修复

需要 Node.js 20 或更新版本，无 npm 依赖。在 vault 根目录执行：

```sh
# 审计：输出分类统计，不修改笔记
node Assets/Scripts/vault_links.mjs --target . --repair-stale --report vault-links.json

# 修复能确定目标的 Windows 改名与旧目录引用
node Assets/Scripts/vault_links.mjs --target . --repair-stale --write

# 检查是否仍有可定位到现有文件的 Windows 改名遗漏
node Assets/Scripts/vault_links.mjs --target . --check-windows

# 回归测试
node --test Assets/Scripts/test_vault_links.mjs
node --test Assets/Scripts/test_windows_sync.mjs
```

省略 `--repair-stale` 时只修复能解析到现有文件的 Windows 改名目标。`--write` 是写入开关；不提供时只审计。`--strict` 会在有任何未解析目标时返回非零状态；本仓库有未公开内容，因此日常同步不使用该选项。

修复仅替换链接的目标，保留显示文字、锚点、块引用、别名、图片尺寸和原换行符。旧路径仅在文件名唯一，或者完整尾部目录能唯一匹配现有文件时修复。多目标歧义和不存在的目标保留原文。隐藏配置目录、脚本和 `Assets/Reports` 下的诊断输出不参与内容替换。

## 自动同步必须在 main 中更新

工作流从 **main** 读取转换脚本和映射。只把修复提交到 Windows 分支，后续自动同步仍会使用旧逻辑。

应将以下文件一起更新到 `main`：

- `.github/windows-path-map.json`
- `.github/workflows/sync-windows-compatible.yml`
- `Assets/Scripts/windows_compat.py`
- `Assets/Scripts/vault_links.mjs`
- `Assets/Scripts/windows_sync.mjs`
- `Assets/Scripts/test_vault_links.mjs`
- `Assets/Scripts/test_windows_sync.mjs`
- `Assets/Scripts/test_windows_compat.py`
- 本说明文件

Windows 笔记中的改名结果应留在生成分支。不要把整个 Windows 分支直接合并到 `main`，否则原始文件名也会被整体带回。生成脚本在同步后会重新核对全库链接，即使主分支没有新增内容也会运行修复。

GitHub 工作流直接使用 Node.js 同步入口，无须在本机准备 Python：

```sh
node Assets/Scripts/windows_sync.mjs --source /path/to/main --target /path/to/windows-compatible
```

旧 Python `sync` 命令委托给同一入口，需要 Python 3.10+ 和 Node.js 20+。完整重命名 (`full`) 应在能够表示原始 macOS 文件名的系统上执行；Windows 日常检查直接使用上面的 Node 命令即可。

## 检查范围

支持笔记中的 Markdown、wiki、引用式 Markdown 与 HTML 链接，以及 Excalidraw 的独立附件记录。检查的是文件目标，不验证标题或块 ID 是否存在。压缩的 Excalidraw 场景没有解码，图中的文字链接不会被单独修改，以免与场景数据不一致。报告中的这些条目需使用 Excalidraw 核对。

本次验证是文件级静态检查，没有在 Obsidian 图形界面中逐个点击链接。Obsidian 对 Markdown 目标要求 URL 编码，参见 [官方内部链接说明](https://obsidian.md/help/links)。

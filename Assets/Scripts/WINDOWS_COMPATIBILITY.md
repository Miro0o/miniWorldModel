# Windows vault 链接维护

`main` 是原始笔记分支，`windows-compatible-paths` 是生成分支。Windows 兼容需要同时处理文件名和引用目标；仅创建分支或重命名文件不足以完成转换。

## 同步与手动修改

笔记可以在 Windows 分支上手动编辑并提交。同步将“上次同步的 main 内容”“当前 Windows 内容”“新的 main 内容”进行三方合并，旧版本先在各自的历史目录中解析链接，再根据 Git 明确识别的重命名映射到新目录；新版本使用新目录。三个版本在合并前统一等价的 URL 编码和换行符，避免把括号与 `%28` 等格式差异当作内容冲突。合并基线始终来自原始 main，避免把先前保留下来的 Windows 手动修改误当作可被覆盖的生成内容。

目录重组时会同时处理引用目标改名和来源笔记移动。Windows 独有或本次 main 未修改的笔记中，能确定指向已重命名文件的链接也会随之更新。修复依靠确切重命名和唯一可确认的目标，不猜测歧义目标。

独立修改自动合并；同一处内容冲突、修改与删除冲突、同名新增或二进制冲突会在写入任何同步文件之前停止。失败时不推进同步状态，也不推送。解决冲突后重新运行工作流。同步要求目标工作区干净。

自动提交以 Windows 分支的当前提交为父提交，使用普通 fast-forward push。运行期间若有人向该分支提交，推送会被拒绝，保留远端新提交；重新运行工作流即可基于新的分支头处理。工作流不使用 force push 或 reset 分支历史。

`Assets/Scripts/` 和 `.github/` 中的工具、映射及工作流由 main 维护，Windows 分支只保留其生成副本。`.github/windows-sync-state.json` 由同步程序维护，不应手动修改。诊断报告、测试工作区和发布补丁均保存在被忽略的 `Assets/Reports/`，不提交到 GitHub。

## 日常检查与修复

需要 Node.js 20 或更新版本，无 npm 依赖。在 vault 根目录执行：

```sh
# 审计：输出分类统计，不修改笔记
node Assets/Scripts/vault_links.mjs --target . --repair-stale --report Assets/Reports/vault-links.json

# 修复能确定目标的 Windows 改名、编码问题与旧目录引用
node Assets/Scripts/vault_links.mjs --target . --repair-stale --write

# 检查是否仍有可定位目标的 Windows 改名或编码遗漏
node Assets/Scripts/vault_links.mjs --target . --check-windows

# 回归测试
node --test Assets/Scripts/test_vault_links.mjs
node --test Assets/Scripts/test_windows_sync.mjs
```

省略 `--repair-stale` 时仍会修复能确认目标的 Windows 改名、Markdown 中的 `%2F` 目录分隔符及未编码空白。合法尖括号目标和 wiki 链接中的空格保持原样；原有百分号编码不重复编码。报告会为目标缺失或有歧义的链接附加编码问题标记，但不会猜测目标。`--write` 是写入开关；不提供时只审计。`--strict` 会在有任何未解析目标时返回非零状态；本仓库有未公开内容，因此日常同步不使用该选项。

修复仅替换链接的目标，保留显示文字、锚点内容、块引用、别名、图片尺寸和原换行符；必要时编码锚点中的空白。旧路径仅在文件名唯一，或者完整尾部目录能唯一匹配现有文件时修复。多目标歧义和不存在的目标保留原文。隐藏配置目录、脚本和 `Assets/Reports` 下的诊断输出不参与内容替换。

## 自动同步必须在 main 中更新

工作流从 **main** 读取转换脚本和映射。只把修复提交到 Windows 分支，后续自动同步仍会使用旧逻辑。

应将以下文件一起更新到 `main`：

- `.github/windows-path-map.json`
- `.github/workflows/sync-windows-compatible.yml`
- `Assets/Scripts/windows_compat.py`
- `Assets/Scripts/vault_links.mjs`
- `Assets/Scripts/excalidraw_links.mjs`
- `Assets/Scripts/vendor/lz-string.mjs` 及其许可证
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

支持笔记中的 Markdown、wiki、引用式 Markdown 与 HTML 链接，以及 Excalidraw 的独立附件记录。检查文件目标及链接编码，不验证标题或块 ID 是否存在；因此文件目标检查通过不代表标题跳转一定有效。

Excalidraw 的 `Element Links` 仅在元素 ID 唯一且文本记录与 JSON / 压缩场景中的链接完全一致时自动修复。修复同时写回两份链接，场景的坐标、文字及其他属性不变。压缩库随脚本提供，采用 MIT 许可证，无需安装 npm 包。自由绘图文字、场景损坏或记录不一致时保留原文，并在报告中标记需人工核对。

命令行检查不能替代 Obsidian 中的逐项点击验证。Obsidian 对 Markdown 目标要求 URL 编码，参见 [官方内部链接说明](https://obsidian.md/help/links)。

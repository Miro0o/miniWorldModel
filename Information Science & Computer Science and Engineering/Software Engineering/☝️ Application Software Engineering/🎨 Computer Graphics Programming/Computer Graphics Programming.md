# Computer Graphics Programming

[TOC]



## Res
### Related Topics
↗ [Computer Graphics (CG)](../../../🧠%20Computing%20Methodologies/Computer%20Graphics%20%28CG%29/Computer%20Graphics%20%28CG%29.md)

↗ [Media Processing & GUI SDK](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/Media%20Processing%20&%20GUI%20SDK.md)
- ↗ [Graphics Rendering Frameworks (2D & 3D)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20%282D%20&%203D%29/Graphics%20Rendering%20Frameworks%20%282D%20&%203D%29.md)
	- ↗ [openGL](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20%282D%20&%203D%29/openGL/openGL.md)
	- ↗ [Mesa Project](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20%282D%20&%203D%29/📌%20Mesa%20Project/Mesa%20Project.md)

↗ [Media Formats & Standards & Codec (Coder-Decoder)](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Media%20Formats%20&%20Standards%20&%20Codec%20%28Coder-Decoder%29/Media%20Formats%20&%20Standards%20&%20Codec%20%28Coder-Decoder%29.md)
↗ [Graphics Formats & Standards](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Media%20Formats%20&%20Standards%20&%20Codec%20%28Coder-Decoder%29/Graphics%20Formats%20&%20Standards/Graphics%20Formats%20&%20Standards.md)

↗ [Digital & Video Games Development](Digital%20&%20Video%20Games%20Development/Digital%20&%20Video%20Games%20Development.md)
↗ [GUI Desktop Environments & Windowing Systems](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20%28Engineering%20Part%29/Linux%20%28Derived%20From%20UNIX%20Family%29/Linux%20Free%20Software%20&%20OSS%20%28Open%20Source%20Software%29/GUI%20Desktop%20Environments%20&%20Windowing%20Systems/GUI%20Desktop%20Environments%20&%20Windowing%20Systems.md)
↗ [Desktop & Monolithic Application Development](../Desktop%20&%20Monolithic%20Application%20Development/Desktop%20&%20Monolithic%20Application%20Development.md)

↗ [Compute Unified Device Architecture & CUDA Programming](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20%28Host%29%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20%28IO%20Devices%29%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)


### Other Resources
https://math.hws.edu/eck/cs424/downloads/graphicsbook.pdf
Introduction to Computer Graphics
Version 1.4, August 2023
David J. Eck
Hobart and William Smith Colleges



## Intro



### Fundamental of Rendering & Display
> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac38fde-f864-83ec-88f5-192a634f2373

- Rendering
    - Purpose
        - Visually represent current game state

    - Draw Game Objects
        - Player
        - NPCs
        - Environment

    - UI
        - Menus
        - Buttons
        - HUD
            - Health bars
            - Compasses

    - Visual Effects
        - Lighting
        - Shadows
        - Particles


- Timing in the Game Loop
    - Main questions
        - How often should game logic update?
        - At what time intervals?
        - Should update frequency depend on frame rate?

    - Two Main Designs
        - Fixed Timestep
        - Variable Timestep


- Fixed Timestep
    - Definition
        - Game logic updates at fixed intervals
        - Independent of rendering frame rate

    - Example
        - Target update rate: $60$ updates/s
        - Fixed timestep:
            - $\Delta t = \frac{1}{60}\text{ s}$
            - $\Delta t \approx 16.67\text{ ms}$

    - Principle
        - Game logic still updates every $16.67\text{ ms}$
        - Rendering FPS may fluctuate independently

    - Typical Implementation
        - Maintain an accumulator
        - Measure frame time
        - Add elapsed time to accumulator
        - While:
            - $accumulator \geq FIXED\_DELTA\_TIME$
        - Run:
            - update_game(FIXED_DELTA_TIME)
        - Subtract:
            - $accumulator -= FIXED\_DELTA\_TIME$

    - Rendering Interpolation
        - Interpolation factor:
            - $interpolation = \frac{accumulator}{FIXED\_DELTA\_TIME}$
        - Used to smooth visual movement between simulation states

    - Advantages
        - Deterministic behavior
        - Consistent physics
        - Stable across different frame rates
        - Important for:
            - Multiplayer
            - Replays
            - Debugging

    - Challenges
        - Visual stutter
            - Rendering may happen more frequently than logic updates
            - Solution:
                - Interpolation

        - Performance bottlenecks
            - Update may take longer than fixed timestep
            - Game can fall behind
            - Possible recovery:
                - Drop frames
                - Skip updates


- Variable Timestep
    - Definition
        - Game logic uses actual elapsed time since previous frame
        - Update size changes from frame to frame

    - Delta Time
        - $\Delta t = current\_time - previous\_time$

    - Example
        - If previous frame takes $20\text{ ms}$
        - Use:
            - $\Delta t = 0.020\text{ s}$

    - Typical Implementation
        - Calculate delta_time
        - process_input()
        - update_game(delta_time)
        - render_frame()

    - Advantages
        - Smoother visuals
        - Logic and rendering are closely tied
        - No interpolation required
        - Simpler implementation

    - Challenges
        - Inconsistent physics
            - Physics result may depend on frame rate

        - Non-deterministic behavior
            - Bugs harder to reproduce
            - Harder debugging

        - Multiplayer / Replay Complexity
            - Synchronization becomes harder

        - Frame-rate Dependency
            - Large $\Delta t$ can cause:
                - Slow motion
                - Unstable movement
                - Missed collisions


- Fixed vs Variable Timestep
    - Fixed Timestep
        - Constant $\Delta t$
        - Better physics consistency
        - More deterministic
        - More suitable for:
            - Physics
            - Multiplayer
            - Replays
        - May require interpolation

    - Variable Timestep
        - Changing $\Delta t$
        - Simpler
        - Smoother visual updates
        - Less deterministic
        - Physics may become unstable


- Hybrid Approach
    - Common in modern game engines
    - Goal:
        - Stable physics
        - Smooth visuals
        - Responsive input

    - Physics
        - Fixed timestep

    - Rendering / General Frame Updates
        - Variable timestep

    - Godot
        - _physics_process(delta)
            - Fixed rate
            - Default: $60$ times/s
        - _process(delta)
            - Called every rendered frame

    - Unity
        - FixedUpdate()
            - Fixed timestep
        - Update()
            - Per-frame / variable timestep


- Modern Game Engine Design
    - Main Goal
        - Support collaboration between:
            - Programmers
            - Artists
            - Designers

    - Abstraction
        - Hide low-level complexity
        - Allow each role to work within its expertise

    - Benefits
        - Parallel development
        - Rapid iteration
        - Reduced bottlenecks
        - Non-programmers can contribute to gameplay and polish


- Unreal Engine: Blueprints
    - Visual scripting system
    - Allows designers to create gameplay logic without writing code
    - Programmers can expose:
        - Variables
        - Functions
        - Events
    - Designers can create:
        - Levels
        - Trigger events
        - Behaviors
    - Artists can connect:
        - Animations
        - Particle effects
        - Sounds


- Godot: Scene System
    - Everything is a Node
    - Scenes:
        - Can contain nodes
        - Can be nested
        - Can be reused
    - Artists/designers:
        - Build scenes visually
    - Programmers:
        - Attach scripts to nodes


- Core Lecture Keywords
    - Game Engine
    - Game Library
    - Game Framework
    - Game Loop
    - Input
    - Update
    - Rendering
    - Frame
    - Delta Time
    - Fixed Timestep
    - Variable Timestep
    - Interpolation
    - Determinism
    - Physics Simulation
    - Asset Pipeline
    - Cross-platform
    - Runtime
    - Editor
    - CPU Jobs
    - GPU Shaders
    - Hybrid Update Model
    - Blueprint
    - Scene
    - Node


### Mathematics Foundation of Computer Graphics (& Programming)
> [!Links]
> ↗ [Algebra](../../../🧮%20Mathematics/🧊%20Algebra/Algebra.md)
> ↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
> ↗ [Linear Algebra & Module-Like Algebraic Structure (模)](../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20%28模%29/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20%28模%29.md)
> 
> ↗ [Geometry](../../../🧮%20Mathematics/Geometry/Geometry.md)

> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac38f08-5f2c-83ec-8c78-eda706f0082c

- Angles
    - Degrees vs radians
    - $360^\circ = 2\pi$
    - $180^\circ = \pi$
    - $90^\circ = \pi/2$
    - Game math functions usually use radians
- Points / Coordinates
    - 2D: $(x, y)$
    - 3D: $(x, y, z)$
    - Cartesian coordinate system
    - Y-up / Z-up
    - Left-handed / right-handed systems
- Vectors
    - Magnitude + direction
    - Uses: direction, velocity, force, position difference
    - 2D: $\vec v = (x, y)$
    - 3D: $\vec v = (x, y, z)$
	- Vector addition
	    - $\vec a + \vec b$
	    - Combine movements / forces
	- Vector subtraction
		- $\vec b - \vec a$
	    - Direction from A to B
	- Scalar multiplication
	    - $k\vec v$
	    - Scale speed / force
	- Vector magnitude
		- $|\vec v| = \sqrt{v_x^2 + v_y^2 + v_z^2}$
	    - Distance / speed
	- Normalization
	    - $\hat v = \vec v / |\vec v|$
	    - Unit vector
	    - Length = $1$
	- Product
		- Dot product
		    - $\vec a \cdot \vec b = a_xb_x + a_yb_y + a_zb_z$
		    - $\vec a \cdot \vec b = |\vec a||\vec b|\cos\theta$
		    - Direction similarity / angle
		    - Field of view checks
		- Cross product
		    - $\vec a \times \vec b$
		    - Produces a perpendicular vector
		    - Right-hand rule
		    - Surface normals / lighting
		    - $|\vec a \times \vec b| = |\vec a||\vec b|\sin\theta$
		- 2D cross product
		    - $a_xb_y - a_yb_x$
		    - Positive: counter-clockwise
		    - Negative: clockwise
- Matrices
    - Rows × columns
    - Addition
    - Subtraction
    - Scalar multiplication
    - Matrix multiplication
    - $c_{ij}$ = row $i$ of A dot column $j$ of B
- Transformations
    - Translation
    - Rotation
    - Scaling
    - Matrix representation
    - Efficient on GPUs
    - Composable
- Homogeneous coordinates
    - $(x, y, z) \rightarrow (x, y, z, 1)$
    - 3D transformations use $4 \times 4$ matrices
    - Enables translation with matrix multiplication
	- Scaling matrix
	    - Scale factors: $s_x, s_y, s_z$
	    - Inverse scale: $1/s_x, 1/s_y, 1/s_z$
	- Translation matrix
	    - $(x, y, z) \rightarrow (x+dx, y+dy, z+dz)$
	    - $T^{-1}(dx,dy,dz)=T(-dx,-dy,-dz)$
	- Rotation
		- 2D rotation
			- $x' = x\cos\theta - y\sin\theta$
			- $y' = x\sin\theta + y\cos\theta$
		- 3D rotation
		    - Around X-axis: rotate YZ plane
		    - Around Y-axis: rotate XZ plane
		    - Around Z-axis: rotate XY plane
		- Orthogonal rotation matrices
		    - Rows / columns are perpendicular unit vectors
		    - $R^{-1} = R^T$
- Transform composition
    - Combine translation, rotation, scaling with matrix multiplication
    - Order matters
    - $AB \neq BA$
- Euler angles
    - Sequential axis rotations
    - Yaw: local Y-axis
    - Pitch: local X-axis
    - Roll: local Z-axis
    - Rotation order matters
- Gimbal lock
    - Two rotation axes become aligned
    - Loss of one degree of freedom
    - Can cause unexpected flips / spins
- Quaternion
    - $q = (s, x, y, z)$
    - $q = (s, \vec v)$
    - Represents 3D rotation
	- Quaternion multiplication
	    - $(a,\vec u)(b,\vec v) = (ab-\vec u\cdot\vec v,\ a\vec v+b\vec u+\vec u\times\vec v)$
	- Quaternion inverse
	    - Identity quaternion: $(1,0,0,0)$
	    - For unit quaternion: $q^{-1}=q^*$
	- Quaternion rotation
	    - $q = (\cos(\theta/2),\ \sin(\theta/2)\vec v)$
	    - $\vec p' = q\vec p q^{-1}$
	- Quaternion advantages
	    - No gimbal lock
	    - Compact: 4 values
	    - Fast and stable for combining rotations
	- Quaternion disadvantages
	    - Less intuitive
	    - Often converted to matrices for GPU rendering



## Computer Graphics Rendering
> [!Links]
> ↗ [Graphics Rendering Frameworks (2D & 3D)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20%282D%20&%203D%29/Graphics%20Rendering%20Frameworks%20%282D%20&%203D%29.md)
> ↗ [Graphic Games Engine](Digital%20&%20Video%20Games%20Development/Graphic%20Games%20Engine/Graphic%20Games%20Engine.md)


### 2D Graphics Rendering
> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac38f4b-2a20-83ec-b605-c08eafa01502

- Sprites
    - Definition
        - 2D image or animation representing a visual object
        - Common uses
            - Character
            - Item
            - Background element
            - UI / visual component
        - Origin
            - Early hardware-supported movable objects
            - Atari / NES
        - Modern usage
            - Software concept in 2D rendering

    - Characteristics
        - Bitmap-based / raster-based
            - Usually represented as raster images
            - Vector graphics must be rasterized before rendering
        - Independent objects
            - Move independently
            - Animate independently
            - Interact independently
        - Layered rendering
            - Z-ordering
            - Front / back drawing order
        - Transformable
            - Scaling
            - Rotation
            - Flipping

    - Image File Formats
        - Standard formats
            - BMP
            - JPEG / JPG
            - GIF
            - PNG
        - Not GPU-native
            - Designed for storage
            - Encoded / compressed
            - Must be decoded / decompressed before rendering
        - General pipeline
            - Image file
            - Decode / decompress
            - Raw pixel data
            - Usually RGBA
            - Upload to GPU
            - Texture
        - BMP
            - High color depth
            - Usually no compression
            - No transparency
            - Large file size
        - JPEG
            - 24-bit color
            - Lossy compression
            - No transparency
            - Good for photos
            - Small file size
        - GIF
            - 8-bit color
            - 256 colors
            - Lossless compression
            - 1-bit transparency
        - PNG
            - 24-bit color
            - Lossless compression
            - Alpha transparency
            - Common in 2D games

    - GPU-native Texture Formats
        - Examples
            - BC7
            - ASTC
        - Hardware-supported texture compression
        - Compressed data can be uploaded directly to GPU
        - GPU decompresses / samples on-the-fly
        - Advantages
            - Lower VRAM usage
            - More assets loaded simultaneously
            - Better scalability
            - Lower CPU-GPU communication overhead
            - Better bandwidth usage

- Sprite Sheet / Texture Atlas
    - Definition
        - One large image containing multiple smaller sprites
        - Sprites arranged in grid or layout
        - Common contents
            - Animation frames
            - Different object states

    - Usage
        - Load one texture
        - Select different regions when rendering
        - Avoid loading many separate image files

    - Advantages
        - Performance
            - Reduces texture switching
            - Supports batching
            - Reduces draw-call overhead
            - Reduces file I/O
            - Reduces texture transfers
            - Improves texture-cache locality
        - Animation
            - Cycle through regions / frames
            - Frame-by-frame animation
            - Character movement
            - UI transitions
            - Visual effects
        - Organization
            - Related graphics stored together
            - Easier asset management
            - Easier export from design tools

- Tilemaps
    - Tile
        - Small reusable image / pattern
        - Usually represents part of the environment

    - Tileset
        - Collection of tile images
        - Usually packed into one texture
        - Each tile has an index / ID

    - Tilemap
        - Grid-based arrangement of tiles
        - Each grid cell refers to a tile ID
        - Used to construct
            - Levels
            - Terrain
            - Backgrounds
            - Large 2D environments

    - Advantages
        - Reuse small graphics
        - Avoid one huge level image
        - Efficient scene construction
        - Easier editing and organization

    - Tile Metadata
        - Collision data
        - Terrain type
        - Gameplay-related properties
        - Gameplay logic can depend on tile properties

    - Tilemap Types
        - Square tilemap
            - Top-down games
            - Side-view games
        - Isometric tilemap
            - Isometric view
            - Often diamond-shaped
            - Can also use hexagonal arrangements

- Texture
    - Definition
        - Image data used by the GPU during rendering
        - Adds
            - Color
            - Detail
            - Visual appearance
            - Realism

    - Texture Lifecycle
        - Load image file into memory
        - Decode image into pixel data
        - Upload pixel data to GPU
        - Store / use as texture
        - Map texture onto a 2D object
        - Render using a draw call

    - Conceptual Difference
        - PNG / JPEG
            - Storage formats
        - Raw pixels
            - Decoded image data
        - Texture
            - GPU-side image resource
        - Sprite
            - Renderable 2D object using a texture

- Texture Mapping
    - Definition
        - Applying a texture onto a surface
        - Determines how texture content aligns with geometry

    - UV Coordinates
        - Texture-space coordinates
        - Similar role to X-Y coordinates
        - Usually normalized
            - $0 \leq U \leq 1$
            - $0 \leq V \leq 1$
        - Lecture convention
            - $(0,0)$ = bottom-left
            - $(1,1)$ = top-right
        - Vertices receive UV coordinates
        - UV coordinates determine which part of texture is sampled

    - Relation to Sprite Sheets
        - Same texture
        - Different UV regions
        - Different animation frame / sprite region

- Texture Wrapping
    - Definition
        - Defines behavior when UV coordinates are outside $[0,1]$

    - Repeat
        - Texture repeats infinitely
        - Suitable for seamless textures
            - Grass
            - Bricks
            - Floors

    - Mirrored Repeat
        - Texture repeats
        - Every other repetition is flipped

    - Clamp-to-Edge
        - Samples edge pixels outside texture boundary
        - Edge pixels appear stretched outward

    - Clamp-to-Border
        - Uses a fixed border color outside texture bounds

- Scrolling
    - Definition
        - Makes the game world appear larger than the screen
        - Moves camera or background relative to player

    - Horizontal Scrolling
        - Camera moves left / right
        - Common in platformers

    - Vertical Scrolling
        - Camera moves up / down
        - Common in vertical shooters

    - Omnidirectional / Free Scrolling
        - Camera moves in any direction
        - Common in top-down RPGs

    - Parallax Scrolling
        - Multiple background layers
        - Different layers move at different speeds
        - Creates perceived depth
        - Simulates a 3D scene using 2D graphics

- 2D Rendering
    - Painter's Algorithm
        - Draw objects back-to-front
        - Foreground objects cover background objects
        - Example order
            - Background tiles
            - Terrain
            - Characters
            - UI
        - Related concept
            - Z-ordering

    - Dirty Rectangle
        - Redraw only changed screen regions
        - Changed regions are called dirty areas
        - Avoids redrawing the entire frame
        - Advantages
            - Fewer pixels processed
            - Lower CPU workload
            - Lower GPU workload
        - Especially useful in
            - Software rendering
            - UI systems
            - Animation frameworks
            - Low-power devices

- Anti-Aliasing
    - Aliasing
        - Jagged / stair-step appearance
        - Caused by representing diagonal or curved lines with square pixels

    - Anti-Aliasing
        - Smooths jagged edges
        - Blends edge pixels with surrounding pixels
        - Creates appearance of smoother lines

    - Benefits
        - Better visual quality
        - Smoother diagonal lines
        - Smoother curves
        - Cleaner text
        - Cleaner sprites and UI
        - Better visual immersion

    - Vector Graphics
        - Anti-aliasing is important after rasterization
        - Helps preserve perceived smoothness

    - Pixel Art
        - Anti-aliasing should usually be avoided
        - Pixel-perfect precision is part of the visual style
        - Blurring can damage intended appearance

- Supersample Anti-Aliasing / SSAA
    - Core Idea
        - Render at higher resolution
        - Downsample to target display resolution

    - Example
        - Render at $3840 \times 2160$
        - Display at $1920 \times 1080$
        - Scale factor per dimension = $2$
        - Number of source samples per final pixel = $2 \times 2 = 4$

    - Advantages
        - Very high image quality
        - Reduces many forms of aliasing
            - Geometry edges
            - Textures
            - Transparency

    - Disadvantages
        - Very computationally expensive
        - High memory / VRAM usage

- Multisample Anti-Aliasing / MSAA
    - Core Idea
        - Multiple sample points per pixel
        - Tests coverage of polygon at different sample positions

    - Boundary Handling
        - Samples may belong to different polygons
        - Blend based on sample coverage

    - Optimization
        - Pixels fully covered by one polygon can reuse rendering results
        - Less expensive than full supersampling

    - Strengths
        - Good for polygon edges
        - Useful for 3D geometry
        - Useful for 2D vector graphics

    - Weaknesses
        - Texture details can still alias
        - Fine details can still alias
        - Limited benefit for raster sprites

- Fast Approximate Anti-Aliasing / FXAA
    - Type
        - Post-processing anti-aliasing
        - Operates on final rendered image

    - Core Idea
        - Detect edges using contrast between neighboring pixels
        - Smooth detected edges

    - Advantages
        - Fast
        - Lightweight
        - Cheaper than SSAA and MSAA
        - Can smooth raster images and texture edges

    - Disadvantages
        - Can blur fine details
        - Can reduce sharpness

    - Suitable For
        - 2D games where some blur is acceptable

- Subpixel Morphological Anti-Aliasing / SMAA
    - Type
        - Post-processing anti-aliasing
        - Similar category to FXAA

    - Core Idea
        - Morphological edge detection
        - Analyze shape and structure of neighboring pixels
        - Detect patterns
            - Straight lines
            - Corners
            - Edge structures
        - Estimate subpixel edge geometry
        - Apply blending based on estimated edge position

    - Compared with FXAA
        - More sophisticated edge analysis
        - Better preservation of sharp details
        - Usually slower than FXAA

- Key Relationships
    - PNG / JPEG
        - Disk image format
        - Encoded / compressed for storage

    - Raw Pixel Data
        - Decoded image
        - Usually RGBA

    - Texture
        - GPU-side image resource
        - Used for sampling during rendering

    - Sprite
        - 2D renderable object
        - Uses a texture or a region of a texture

    - Sprite Sheet / Texture Atlas
        - One texture containing many sprite regions

    - Tile
        - Reusable small image region

    - Tileset
        - Collection of tile definitions / images

    - Tilemap
        - Grid of tile IDs

    - UV
        - Selects positions / regions inside a texture

- Overall 2D Graphics Pipeline
    - Asset Storage
        - PNG / JPEG / other image files on disk

    - Loading
        - Read image data into system memory

    - Decoding
        - Compressed image
        - Raw RGBA pixels

    - GPU Upload
        - Pixel data transferred to GPU memory
        - Stored / represented as texture

    - Scene Representation
        - Sprite
        - Tilemap
        - Background
        - UI
        - Transform data
            - Position
            - Rotation
            - Scale
            - Z-order

    - Texture Selection
        - UV coordinates
        - Sprite-sheet region
        - Tile region

    - Rendering
        - Draw calls
        - Back-to-front ordering
        - Texture sampling
        - Rasterization
        - Pixel / fragment generation

    - Final Image
        - Rendered frame
        - Anti-aliasing may be applied
        - Displayed on screen


### 3D Graphics Rendering
#### 3D Rendering Pipeline
> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac38f2d-5694-83ec-b7e8-300cd5d007ee

- 3D Games and Real-Time Rendering
    - Virtual world
    - Interactive control
    - Dynamic environment
    - Real-time response
    - Games = interactive rendering applications
    - Movies may use offline rendering
    - Frame rate and frame budget
        - 60 Hz display $\rightarrow$ ideally 60 frames/second
        - Frame budget: $1000 / 60 \approx 16.67$ ms/frame
    - Pixel throughput
        - Example: $1920 \times 1080 \times 60 = 124,416,000$ pixels/second
        - Actual fragment computations may be higher
            - Overdraw
            - Multisampling

- Overall 3D Rendering Pipeline
    - 3D models
    - Coordinate transformations
    - Rasterization
    - Fragment shading
    - Depth testing
    - Stencil testing
    - Blending
    - Final image

- 3D Geometry Representation
    - Graphics primitives
        - Points
        - Lines
        - Polygons
    - Polygon mesh
        - Represents the surface of a 3D object
        - Vertices
            - Points in 3D space
        - Edges
            - Connections between vertices
        - Faces
            - Polygons bounded by edges
        - Mesh may be open or closed
    - Triangulation
        - Game-engine faces are normally converted into triangles
        - Triangle meshes are the common representation for surfaces
        - Advantages of triangles
            - Three non-collinear points uniquely define a plane
            - Always planar
            - Mathematically simple
            - Efficient for hardware rendering
            - Can approximate curved surfaces with increasing triangle density
    - Polygon count
        - More triangles usually allow more geometric detail
        - Higher geometric detail also increases processing and memory costs
        - Low-poly geometry can also be an intentional visual style

- Mesh Data
    - Vertex Buffer
        - Stores vertex data
        - Vertex attributes may include
            - Position
            - Normal
            - Texture coordinates / UVs
            - Tangent
            - Vertex color
    - Index Buffer
        - Specifies which vertices form each triangle
        - Example
            - Triangle 1: $V_1, V_2, V_3$
            - Triangle 2: $V_1, V_4, V_8$
        - Allows vertex reuse
        - Vertices can be reused only when their complete attribute sets are identical

- Coordinate Systems
    - Purpose
        - A coordinate only has meaning relative to a coordinate system
        - The same vertex is represented from different perspectives during rendering
    - Coordinate pipeline
        - Model Coordinates
        - World Coordinates
        - View Coordinates
        - Clip Coordinates
        - Normalized Device Coordinates (NDC)
        - Screen / Viewport Coordinates

- Model Coordinates
    - Also called
        - Local coordinates
        - Object coordinates
    - Coordinates are relative to the object's own origin and axes
    - $(0,0,0)$ means the object's local origin
    - Same mesh can be reused with different
        - Positions
        - Orientations
        - Scales
    - Purpose
        - Define the shape and structure of the object itself

- World Coordinates
    - Global coordinate system shared by all objects in the scene
    - Model coordinates $\rightarrow$ world coordinates
    - Model Matrix $M$
        - May combine
            - Translation
            - Rotation
            - Scaling
    - Transformation
        - $p_{world} = M p_{model}$
    - Purpose
        - Place objects relative to a common world origin

- View Coordinates
    - Also called
        - Camera coordinates
        - Eye coordinates
    - Coordinates are relative to camera position and orientation
    - World coordinates $\rightarrow$ view coordinates
    - View Matrix $V$
        - Performs the inverse of the camera's world transform
    - Transformation
        - $p_{view} = V p_{world}$
    - Concept
        - Transform the world so that the camera is at the origin
        - Camera looks along a predefined axis, e.g. negative $Z$
    - Moving the camera changes view coordinates even when world coordinates do not change

- 3D Projection
    - Purpose
        - Convert a 3D scene into a representation that can ultimately appear on a 2D display
    - Major projection types
        - Perspective projection
        - Parallel projection
            - Orthographic projection
            - Oblique projection
    - Real-time games mainly use
        - Perspective projection
        - Orthographic projection

- Perspective Projection
    - Center of projection
        - Comparable to the optical center of an eye or camera
    - Projection plane
        - Comparable to the retina or camera sensor
        - Virtual plane placed in front of the projection center in the lecture model
    - Projectors
        - Lines converge at the center of projection
    - Main visual property
        - Distance-based size attenuation
        - Farther objects appear smaller
    - Basic projection relationship
        - $x_s = D \frac{x_e}{z_e}$
        - $y_s = D \frac{y_e}{z_e}$
    - Important idea
        - Projected size depends on $1/z$

- Orthographic Projection
    - No finite center of projection
        - Can be considered to have a center at infinity
    - Projection rays are parallel
    - Projection is perpendicular to the projection plane
    - No distance-based size attenuation
        - Far objects do not automatically appear smaller
    - Parallel lines generally remain parallel after projection
    - Basic relationship
        - $x_s = x_e$
        - $y_s = y_e$
    - Axonometric views
        - Orthographic camera may be oriented to reveal multiple world axes
    - Isometric projection
        - Special case of axonometric projection
        - Three principal axes are equally foreshortened

- View Frustum
    - Defines the visible region of a perspective camera
    - Boundaries
        - Left
        - Right
        - Top
        - Bottom
        - Near plane
        - Far plane
    - Geometry completely outside the visible region may be discarded
    - Geometry crossing a boundary must be clipped

- Clip Coordinates
    - View coordinates $\rightarrow$ clip coordinates
    - Projection Matrix $P$
    - Transformation
        - $p_{clip} = P p_{view}$
    - Homogeneous coordinates
        - $(x_c, y_c, z_c, w_c)$
    - Purpose
        - Intermediate representation for projection and clipping
        - Visible region is represented using homogeneous-coordinate boundaries

- Homogeneous Coordinates
    - A 3D point can be represented using four components
        - $(x,y,z,w)$
    - Common affine representations
        - Point: $(x,y,z,1)$
        - Direction: $(x,y,z,0)$
    - Enables 3D transformations to be represented using $4 \times 4$ matrices
    - Not the same as a quaternion
        - Homogeneous coordinate: represents a point/direction for transformation
        - Quaternion: represents rotation/orientation
    - In perspective projection
        - $w$ is used during perspective division

- Clipping
    - Performed against the visible clip volume
    - Primitive completely outside
        - Discard
    - Primitive crossing a boundary
        - Clip the outside portion
        - Keep the visible portion
    - Happens before perspective division

- Perspective Division
    - Clip coordinates
        - $(x_c,y_c,z_c,w_c)$
    - Divide by $w_c$
        - $x_{ndc} = x_c / w_c$
        - $y_{ndc} = y_c / w_c$
        - $z_{ndc} = z_c / w_c$
    - Produces Normalized Device Coordinates
    - Important for perspective behavior

- Normalized Device Coordinates (NDC)
    - Standardized 3D space for visible geometry
    - Typical ranges
        - $x \in [-1,1]$
        - $y \in [-1,1]$
    - Depth range depends on graphics API
        - OpenGL: commonly $z \in [-1,1]$
        - Direct3D / Vulkan: commonly $z \in [0,1]$
    - Purpose
        - Standardize coordinates before viewport mapping
        - Separate projection calculations from actual viewport resolution

- Viewport / Screen Coordinates
    - NDC $\rightarrow$ screen / viewport coordinates
    - Viewport transformation
    - Maps normalized coordinates to the rendering viewport
    - Example
        - $x \in [-1,1] \rightarrow [0,\text{viewport width}]$
        - $y \in [-1,1] \rightarrow [0,\text{viewport height}]$
    - Also maps NDC depth to the configured depth range
    - Provides coordinates used for rasterization

- Complete Coordinate Transformation Pipeline
    - Model space
        - $p_{model}$
    - Model transformation
        - $p_{world} = M p_{model}$
    - View transformation
        - $p_{view} = V p_{world}$
    - Projection transformation
        - $p_{clip} = P p_{view}$
    - Combined conventional vertex transformation
        - $p_{clip} = P V M p_{model}$
    - Clipping
    - Perspective division
        - $(x_c,y_c,z_c,w_c) \rightarrow (x_c/w_c,y_c/w_c,z_c/w_c)$
    - NDC
    - Viewport transformation
    - Screen coordinates

- Shaders
    - Shader
        - Program running at a programmable stage of the GPU pipeline
    - Main stages in this lecture
        - Vertex Shader
        - Fragment Shader / Pixel Shader
    - Not every pipeline operation is performed by these shaders
        - Clipping
        - Rasterization
        - Depth testing
        - Blending
    - Other possible programmable stages
        - Tessellation
        - Geometry
        - Mesh
        - Task

- Vertex Shader
    - Conceptually processes submitted vertices
    - Indexed vertices may benefit from cached results
    - Inputs
        - Position
        - Normal
        - Color
        - Texture coordinates
        - Other vertex attributes
    - Main output
        - Clip-space vertex position
    - May pass data toward fragment processing
        - Texture coordinates
        - Normals
        - Colors
        - Other varying values
    - Other possible work
        - Vertex animation
        - Vertex displacement
    - Conventional position calculation
        - $p_{clip} = P V M p_{model}$

- Rasterization
    - Converts projected geometric primitives into covered rasterization locations
    - Determines which sample locations are covered by each triangle
    - Generates fragments
    - Highly optimized in modern GPUs

- Rasterization: Triangle Coverage
    - Triangle can be represented as the intersection of three edge half-planes
    - A sample is inside the triangle when it lies inside all three interior half-planes
    - Samples exactly on an edge require a deterministic tie-breaking rule

- Top-Left Rule
    - Resolves ownership of samples lying exactly on shared triangle edges or vertices
    - Top edge
        - Horizontal edge above the triangle interior
    - Left edge
        - Non-horizontal edge on the left side of the triangle
    - Sample exactly on an edge
        - Covered only when that edge is classified as top or left
    - Prevents inconsistent coverage along shared triangle boundaries

- Fragments
    - Generated during rasterization
    - Fragment is not the same as a final pixel
    - Fragment
        - Candidate contribution to one or more framebuffer samples
    - Fragment data may contain interpolated values
        - Position
        - Color
        - Texture coordinates
        - Depth
        - Other varying values
    - Multiple fragments may correspond to the same screen location

- Attribute Interpolation
    - Values associated with triangle vertices are interpolated across the primitive
    - Fragment shader receives interpolated inputs
    - Examples
        - UV coordinates
        - Colors
        - Normals

- Fragment Shader
    - Also called Pixel Shader in Direct3D
    - Processes fragments produced by rasterization
    - Inputs
        - Interpolated fragment data
    - Can sample textures using texture coordinates
    - Computes candidate outputs describing fragment appearance
        - Commonly color
    - Fragment shader output is not automatically the final displayed pixel
        - Depth testing may reject it
        - Stencil testing may reject it
        - Blending may modify its contribution

- Depth
    - Multiple 3D surfaces may overlap at the same 2D screen location
    - Depth provides an ordering value for surfaces at a framebuffer sample
    - Needed to determine which surface is visible
    - Without depth handling
        - Far geometry could incorrectly appear over near geometry

- Depth Representation
    - Projection + perspective division produce NDC $z$
    - Viewport / depth-range transformation produces window depth
    - Window depth is commonly mapped to $[0,1]$
    - Stored in a depth attachment
        - Fixed-point or floating-point representation

- Visibility Problem
    - Goal
        - Determine which surfaces are visible from the camera
    - Challenges
        - Overlapping triangles
        - Transparency
        - Blending
        - Millions of fragments per frame
    - Main methods
        - Painter's Algorithm
        - Z-buffering

- Painter's Algorithm
    - Sort surfaces by depth
    - Draw back-to-front
    - Useful for transparent rendering
    - Limitation
        - Cannot generally solve intersecting geometry without splitting geometry

- Z-Buffering
    - Modern standard for ordinary opaque visibility
    - Maintain a depth buffer
        - Same sample resolution as the framebuffer
        - Stores the closest depth seen so far
    - Basic algorithm
        - Initialize depth buffer with maximum depth, e.g. $1.0$ or $\infty$
        - For each fragment
            - Compare fragment depth with stored depth
            - If fragment is closer
                - Update color
                - Update depth
            - Otherwise
                - Reject fragment
    - Ordinary nearest-depth Z-buffering alone does not solve transparency

- Stencil Testing
    - Uses an integer mask
    - Controls where rendering is allowed
    - Example uses
        - Mirrors
        - Portals
        - Restricted rendering regions

- Blending
    - Performed for samples that pass relevant tests
    - Combines fragment-shader output with the color already in the framebuffer
    - Common alpha-blending concept
        - $C_{final} = \alpha C_{src} + (1-\alpha)C_{dst}$
    - Important for transparency and compositing

- Perspective Depth Mapping
    - Depth buffer usually does not store linear camera distance
    - Standard perspective depth is non-linear
    - General relationship
        - $d = a\frac{1}{z} + b$
    - $d$
        - Stored depth value
    - $z$
        - Positive view-space depth
    - $a,b$
        - Constants determined by near/far plane settings
    - Consequence
        - Depth behaves like a linear remapping of $1/z$

- Z-Buffer Precision
    - Non-linear depth distribution
        - Most precision is concentrated near the near plane
        - Much less precision is available near the far plane
    - Finite depth precision may cause unstable ordering of nearby surfaces

- Z-Fighting
    - Occurs when two surfaces have very similar depth values
    - Finite precision may make their ordering unstable
    - Visible result
        - Flickering
        - Shimmering
        - Alternating visible surfaces when the camera moves

- Solutions to Z-Buffer Precision Problems
    - Polygon offset
        - Apply a small depth bias
        - Useful for nearly coplanar surfaces
    - Increase depth-buffer precision
        - 24-bit depth
        - 32-bit depth
    - Adjust camera frustum
        - Move near plane farther away
        - Reduce far plane distance
    - Reverse-Z

- Forward-Z
    - Conventional mapping
        - Near plane $\rightarrow d = 0$
        - Far plane $\rightarrow d = 1$
    - Because $d$ is related to $1/z$
        - Distinct depth values are concentrated near the near plane
        - Far-distance precision becomes relatively poor

- Reverse-Z
    - Reverse depth mapping
        - Near plane $\rightarrow d = 1$
        - Far plane $\rightarrow d = 0$
    - Particularly useful with floating-point depth buffers
    - Floating-point distribution partly counteracts the $1/z$ depth non-linearity
    - Result
        - Similar precision near the near plane
        - Much better precision across the rest of the depth range

- Final Rendering Pipeline Summary
    - Vertex Shader
        - Determine submitted vertex positions in clip space
        - Pass varying data toward later stages
    - Clipping
        - Remove primitive portions outside the visible region
    - Perspective Division
        - Convert clip coordinates to NDC
    - Viewport Mapping
        - Convert NDC to viewport coordinates
    - Rasterization
        - Determine covered samples
        - Generate fragments and interpolated inputs
    - Fragment Shader
        - Compute candidate fragment outputs
    - Depth Testing
        - Resolve ordinary front/back visibility
    - Stencil Testing
        - Restrict rendering according to masks
    - Blending
        - Combine passing fragment outputs with existing framebuffer colors
    - Framebuffer
        - Stores the resulting image data
    - Final Image
        - Result of the complete rendering pipeline


---
整个流程：
```
3D Models
   ↓
Coordinate Transformation
   ↓
Rasterization
   ↓
Fragment Shading
   ↓
Depth / Stencil / Blending
   ↓
Image
```

对应问题分别是：
```
模型是什么形状？
        ↓
模型在哪里？相机在哪里？
        ↓
哪些屏幕位置被三角形覆盖？
        ↓
这些位置应该是什么颜色？
        ↓
它最终应该真的显示出来吗？
```

课件总结：3D 游戏把对象储存为 geometry，渲染管线把 geometry 转换到 camera view，rasterization 决定三角形覆盖屏幕哪里，shader 计算位置与表面外观，最终 depth/stencil/blending 决定 framebuffer 中写入什么。

---
```
Model Coordinates
       ↓ model transform
World Coordinates
       ↓ view transform
View Coordinates
       ↓ projection
Clip Coordinates
       ↓ clipping + perspective divide
NDC
       ↓ viewport transform
Screen Coordinates
```
#### Light Source & Reflection
> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ae05817-3c78-83ec-969b-329600784977

把整堂课串起来：GPU 是如何渲染一面砖墙的？
这是对整堂 Lecture 的综合理解，也能把它和上一讲连接起来。
假设你使用 Blender 创建了一面砖墙，然后把它导入 Godot。

Step 1：Mesh 决定墙的几何形状
这面墙可能只是由两个三角形构成的平面。
它有顶点位置、顶点法线、UV 等数据。

Step 2：UV 决定贴图怎样放在墙面上
你给墙设置好 UV Coordinates。
这样 Shader 就可以知道，对于墙面上的一个片元，应该从贴图的什么位置读取数据。

Step 3：PBR Texture Maps 决定不同位置的材质参数
Base Color
定义砖头和砖缝的颜色
Normal
模拟砖头与缝隙的凹凸
Roughness
控制不同位置的反光宽度
Ambient Occlusion
近似砖缝里的环境遮蔽

Step 4：Vertex Shader 处理模型坐标变换
回到上一讲：$P_{\text{clip}}=PVM P_{\text{model}}$
这里 \(M\) 是 Model Matrix，\(V\) 是 View Matrix，\(P\) 是 Projection Matrix。
GPU 通过这些变换得到用于裁剪和投影的坐标。

Step 5：Rasterization 产生 Fragments
GPU 将投影后的三角形光栅化。
每个 Fragment 会得到插值的属性，例如 UV Coordinates，以及供后续着色使用的其他信息。

Step 6：Fragment Shader 采样 Texture
对一个特定 Fragment：

$(u,v)\rightarrow \begin{cases} \text{Base Color}\\ \text{Normal}\\ \text{Roughness}\\ \text{AO} \end{cases}$
这个过程不是把所有图片直接叠加成最终颜色。
而是将不同贴图的值作为材质参数，传递给不同的着色计算。

Step 7：使用 Lighting + BRDF 计算光照
游戏里可能存在一盏 Directional Light，模拟太阳。
Shader 知道光源的方向 \(L\)，表面法线 \(N\)，以及摄像机的方向 \(V\)。
它使用 PBR 的 BRDF 计算反射贡献。
例如砖缝位置的 Normal 会与砖面不同，因此即使真实 Mesh 是平的，也会形成看起来凹陷的光照效果。
与此同时，Roughness 会影响高光形态，AO 可以近似影响间接照明。

Step 8：经过测试和混合后输出
最后，Fragment Shader 给出颜色等输出。
渲染管线还会处理适用的 Depth / Stencil Tests、Blending 等操作。
最终写入 Framebuffer，形成屏幕上的图像。
这也是本讲与上一讲的完整连接。

---
- 3D Graphics Pipeline (Recap)
    - Model Space → World Space → View Space → Clip Space → NDC → Screen Space
    - Rasterization: Triangles → Fragments
    - Fragment Shading: Material, Texture, Lighting
    - Depth / Stencil Testing, Blending → Final Image

- Lighting
    - Purpose
        - Light–surface interactions
        - Realism, depth perception, atmosphere
        - Aesthetic and gameplay effects
    - Point Light (Omnidirectional)
        - Single position, all directions
        - Distance attenuation
        - Inverse-square falloff: $I \propto 1/d^2$
        - Attenuation: $A(d) = 1/(k_c + k_l d + k_q d^2)$
        - Examples: Lamps, lanterns
    - Directional Light
        - Fixed direction, no specific position
        - Parallel light rays
        - No distance attenuation
        - Example: Sunlight
    - Spotlight
        - Position, direction, cone angle
        - Angular falloff, distance attenuation
        - Examples: Flashlight, stage lighting
    - Ambient Light
        - Constant approximation of indirect illumination
        - No directional shadows or highlights
        - Independent of viewing direction
        - Example: Background illumination in dark scenes

- Lighting and Reflection Models
    - Reflection Model: Surface response to incoming light
    - Lighting Model: Reflection + Light Sources + Visibility / Occlusion
    - Realism vs Computational Efficiency

    - Phong Reflection Model
        - $I = I_{ambient} + I_{diffuse} + I_{specular}$
        - Ambient Reflection
            - Constant background illumination
            - $I_{ambient} = I_a k_a$
            - $I_a$: Ambient light intensity
            - $k_a$: Ambient reflectivity
        - Diffuse Reflection (Lambertian)
            - Matte reflection
            - View-independent outgoing radiance
            - $I_{diffuse} = I_d k_d \max(0, N \cdot L)$
            - $I_d$: Diffuse light intensity
            - $k_d$: Diffuse reflectivity
            - $N$: Normalized surface normal
            - $L$: Normalized surface-to-light direction
            - $N \cdot L = \cos\theta$
            - $\max(0, N \cdot L)$: Prevents negative lighting
        - Specular Reflection
            - Shiny, view-dependent highlights
            - $I_{specular} = I_s k_s [\max(0, R \cdot V)]^n$
            - $I_s$: Specular light intensity
            - $k_s$: Specular reflectivity
            - $R$: Reflection direction
            - $V$: Surface-to-viewer direction
            - $n$: Shininess coefficient
            - $R = 2(N \cdot L)N - L$
            - Higher $n$ → Smaller, sharper highlights
            - Specular evaluated when $N \cdot L > 0$

    - Blinn-Phong Reflection Model
        - Variation of Phong
        - Halfway Vector
            - $H = (L + V)/\|L + V\|$
            - Midway direction between light and viewer
        - Specular Reflection
            - $I_{specular} = I_s k_s [\max(0, N \cdot H)]^n$
            - Maximum highlight when $N$ aligns with $H$
        - Avoids explicit reflection-vector calculation
        - Performance advantage: Implementation-dependent
        - Same exponent → Broader highlights than Phong

- Physically-Based Rendering (PBR)
    - Physically plausible light–surface interactions
    - Energy Conservation
        - Reflected energy ≤ Incident energy (non-emissive surfaces)
    - Physically meaningful material parameters
        - Base Color
        - Roughness
        - Metallic
    - Consistent behavior under different lighting conditions

    - Microfacet Theory
        - Surface modeled as microscopic mirror-like facets
        - Microfacet normal distribution
        - Smooth Surface
            - Aligned microfacet normals
            - Narrow, sharp highlights
        - Rough Surface
            - Scattered microfacet normals
            - Broad, dimmer highlights

    - Bidirectional Reflectance Distribution Function (BRDF)
        - Incoming direction: $\omega_i$
        - Outgoing direction: $\omega_o$
        - $f_r(\omega_i,\omega_o) = dL_o/dE_i$
        - $f_r = f_{diffuse} + f_{specular}$
        - Common Models
            - Diffuse: Lambertian
            - Specular: Cook-Torrance Microfacet Model

    - Diffuse BRDF
        - $f_{diffuse} = (1-F)(1-m)c/\pi$
        - $F$: Fresnel term
        - $m$: Metalness
        - $c$: Base Color
        - $\pi$: Lambertian normalization
        - Fresnel Effect
            - Reflectance depends on viewing angle
            - Stronger reflection at grazing angles
        - Metalness
            - $m = 0$: Non-metal / Dielectric
            - $m = 1$: Metal / Conductor
            - Metals: Little or no diffuse reflection

    - Specular BRDF (Cook-Torrance)
        - $f_{specular} = DGF/[4(N \cdot V)(N \cdot L)]$
        - D: Normal Distribution Function (NDF)
            - Statistical distribution of microfacet normals
            - Smooth → Concentrated normals, sharp highlights
            - Rough → Distributed normals, broad highlights
        - G: Geometry Function
            - Microfacet occlusion
            - Shadowing: Incoming light blocked
            - Masking: Reflected light blocked
        - F: Fresnel Term
            - Angle-dependent reflectance
        - Denominator
            - Geometric normalization
            - $N \cdot V$: View-angle factor
            - $N \cdot L$: Light-angle factor

    - Phong / Blinn-Phong vs PBR
        - Phong: Empirical reflection model
        - Blinn-Phong: Halfway-vector specular approximation
        - PBR: Physically plausible reflection
        - Shininess vs Roughness
        - PBR: Energy conservation, Fresnel, microfacets

- Texture Mapping in 3D
    - Mapping 2D textures onto 3D surfaces
    - UV Coordinates
        - $(u,v)$: 2D texture coordinates
        - Vertex position: $(x,y,z)$
        - Vertex attributes: Position, Normal, UV
        - UV interpolation during rasterization
    - UV Unwrapping
        - Flattening 3D surfaces into 2D
        - UV Islands
        - UV Seams
            - Same geometric position
            - Multiple vertex records with different UVs

- PBR Texture Maps (Metallic-Roughness Workflow)
    - Albedo / Base Color Map
        - Material base color
        - Non-metal: Diffuse reflectance color
        - Metal: Colored specular reflectance
        - No baked directional lighting, highlights, or shadows

    - Normal Map
        - Simulates bumps, grooves, surface details
        - Encodes normals in RGB channels
        - Tangent-space normals (common)
        - Object-space normals (alternative)
        - Changes lighting normals, not geometry
        - Examples: Bricks, skin pores, fabric

    - Roughness Map
        - Surface micro-roughness
        - Low Roughness → Sharp, narrow reflections
        - High Roughness → Broad, diffuse-looking reflections
        - Examples: Glossy ceramic, matte rubber

    - Metallic / Metalness Map
        - Metal vs Non-metal behavior
        - $0$: Dielectric / Non-metal
        - $1$: Conductor / Metal
        - Intermediate values: Transitions / Mixed materials
        - Examples: Plastic, chrome

    - Ambient Occlusion (AO) Map
        - Approximate local ambient visibility
        - Darkens indirect illumination in enclosed regions
        - Crevices, gaps, folds
        - Not equivalent to directional shadows

    - Height / Displacement Map
        - Scalar surface height
        - Bump Mapping: Apparent surface detail
        - Parallax Mapping: View-dependent texture offset
        - Displacement Mapping: Actual geometry modification
        - Examples: Terrain, embossed surfaces

    - Opacity / Alpha Map
        - Surface transparency
        - Alpha Masking
            - Binary visibility / Fragment discard
            - Examples: Leaves, fences, cutout decals
        - Alpha Blending
            - Partial transparency
            - Example: Windows

    - Emissive Map
        - Self-emitted radiance
        - Bloom: Visible glow / Halo
        - Emissive Global Illumination: Lighting nearby surfaces
        - Examples: Neon signs, LEDs, lava, glowing eyes

    - Material Inputs
        - Constant values or texture maps
        - Not every material requires every map

- PBR Material Workflows
    - Metallic-Roughness Workflow
        - Base Color
        - Metallic
        - Roughness
        - Explicit metalness control
        - Common in modern real-time rendering
    - Specular-Glossiness Workflow
        - Alternative PBR workflow
        - Diffuse Map
            - Non-metal: Diffuse surface color
            - Metal: Little or no diffuse contribution
        - Specular Map
            - Direct control of specular strength and color
            - Non-metal: Weak, nearly neutral specular
            - Metal: Strong, often colored specular
        - Glossiness Map
            - $1$: Smooth, sharp reflections
            - $0$: Rough, broad reflections
            - $Glossiness \approx 1 - Roughness$
    - Workflow Comparison
        - Metallic-Roughness
            - Simpler, compact, harder to misuse
            - Metalness explicitly specified
        - Specular-Glossiness
            - More direct specular control
            - Metalness expressed through diffuse/specular values
        - Use the renderer's native material workflow
        - Do not directly interchange incompatible texture maps
- Key Relationships
    - Geometry → Surface Shape
    - UV Mapping → Texture Coordinates
    - Texture Maps → Material Parameters
    - Light Sources → Incoming Illumination
    - Surface Normals → Light Interaction
    - BRDF → Diffuse + Specular Reflection
    - PBR → Microfacets + Fresnel + Energy Conservation
    - Fragment Shader → Shaded Fragment Output
    - Depth / Stencil / Blending → Final Image
#### Rendering Computation
> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ae05882-973c-83ec-a772-76b898952589

建议最后从三个维度去理解这节课，而不是把所有技术当作彼此独立的术语。

维度一：它解决什么视觉问题？

|技术|解决的问题|
|---|---|
|Shadow Volumes|几何精确的硬阴影|
|Shadow Mapping|实时阴影|
|PCF|阴影边缘过滤和平滑|
|PCSS|随遮挡距离变化的软阴影|
|CSM|阴影分辨率分配|
|Ray-traced Shadows|基于几何相交的阴影|
|SSR|利用屏幕已有数据近似反射|
|SSAO|局部环境遮蔽|
|Environment Mapping|基于纹理的环境反射|
|Lightmapping|预计算静态光照|
|DOF|景深模糊|
|Bloom|亮光晕效果|

维度二：它主要依赖什么数据？

|技术|核心数据|
|---|---|
|Shadow Mapping|Light-space Depth Texture|
|Shadow Volumes|Shadow Geometry + Stencil Buffer|
|Ray Tracing|Scene Geometry + Ray Intersection|
|Deferred Rendering|G-buffer|
|Forward+|Depth Range + Tile Light Lists|
|SSR|Screen Color / Depth / Normal|
|SSAO|Depth / Normal|
|Environment Mapping|Cubemap|
|Lightmapping|Baked Lightmap Texture|
这个表尤其值得掌握。
因为很多技术虽然产生相似的视觉效果，但使用的数据和计算方式完全不同。

维度三：速度与真实感之间的取舍
下面是一个定性的比较，用来帮助建立直觉，不代表所有游戏或 GPU 上的实际性能排名。

| 方案                  | 主要优势     | 主要限制                     |
| ------------------- | -------- | ------------------------ |
| Shadow Mapping      | 适合实时渲染   | 分辨率、Bias 和 Aliasing      |
| PCSS                | 更自然的软阴影  | 额外采样成本                   |
| Ray-traced Shadows  | 直接测试几何遮挡 | 高计算成本                    |
| SSR                 | 重用当前帧数据  | 只能利用屏幕已有信息               |
| Environment Mapping | 环境反射成本低  | 不能精确反映所有动态几何             |
| SSAO                | 局部遮蔽成本较低 | 不是完整 Global Illumination |
| Lightmapping        | 实时光照成本低  | 静态限制与纹理内存开销              |


---
- 3D Graphics: Advanced Rendering
    - Shadows
    - Ray Tracing
    - Rendering Architectures
    - Screen-Space Effects
    - Environment Mapping
    - Lightmapping

- Shadows
    - Importance
        - Visual realism: depth, grounding, spatial awareness
        - Gameplay cues: distance, movement, lighting
        - Immersion: dynamic shadows

    - Shadow Volumes
        - Geometry-based hard shadows
        - Silhouette edge extrusion
        - Stencil Buffer
        - Pipeline
            - Render scene depth into Depth Buffer
            - Identify silhouette edges relative to light
            - Extrude edges away from light
            - Construct Shadow Volume
            - Render Shadow Volume with depth testing
            - Update Stencil Buffer
                - Front-facing polygons
                - Back-facing polygons
                - Opposite stencil count updates
            - Stencil Count
                - Zero: lit
                - Non-zero: shadowed
        - Pros
            - Geometrically accurate hard shadows
        - Cons
            - No soft shadows
            - Expensive for complex scenes
            - Rarely used in modern engines

    - Shadow Mapping
        - Light-space depth-based shadows
        - Two rendering passes
            - Pass 1: Light Perspective
                - Light View Matrix
                - Light Projection Matrix
                - Render scene depth
                - Store closest depth per texel
                - Shadow Map: 2D Depth Texture
            - Pass 2: Camera Perspective
                - Render scene normally
                - Transform fragment position into Light Space
                - Locate corresponding Shadow Map texel
                - Compare fragment depth with stored depth
        - Depth Comparison
            - $d_{fragment} > d_{shadow}$: Shadow
            - $d_{fragment} \leq d_{shadow}$: Lit
        - Pros
            - GPU-friendly
            - Scales with complex scenes and multiple lights
            - Soft shadow approximation
        - Cons
            - Aliasing artifacts
            - Limited resolution and precision

    - Soft Shadows
        - Area Lights
            - Umbra: fully occluded region
            - Penumbra: partially occluded region
        - Percentage Closer Filtering (PCF)
            - Multiple shadow-map samples
            - Sampling Kernel: 3x3, 4x4
            - Depth comparison per sample
            - Average visibility results
            - $V_{PCF} = \frac{1}{N}\sum_{i=1}^{N}V_i$
            - Softer shadow edges
            - Reduced aliasing
            - Increased sampling cost
        - Percentage-Closer Soft Shadows (PCSS)
            - Extension of PCF
            - Contact-hardening shadows
            - Blocker Search
            - Average Blocker Depth
            - Penumbra Width Estimation
                - Light size
                - Blocker-receiver separation
            - Variable-radius PCF
            - Sharp shadows near blockers
            - Softer shadows farther from blockers
            - Approximation, not full area-light simulation

    - Shadow Mapping Artifacts
        - Shadow Acne
            - Incorrect self-shadowing
            - Limited resolution
            - Depth precision errors
            - Solution: Depth Bias
            - $d_{fragment} - bias > d_{shadow}$
        - Peter-panning
            - Detached or floating shadows
            - Excessive Depth Bias
            - Solutions
                - Bias tuning
                - Slope-scaled Bias
        - Perspective Aliasing
            - Light-space vs Camera-space mismatch
            - Uneven Shadow Map texel distribution
            - Low effective resolution near camera
        - Cascaded Shadow Maps (CSM)
            - Split Camera View Frustum into cascades
                - Near
                - Middle
                - Far
            - Separate Shadow Map per cascade
            - Higher texel density near camera
            - Better shadow resolution distribution

- Ray Tracing
    - Ray-traced Shadows
        - Cast rays from surface points toward lights
        - Ray-Geometry Intersection
        - Blocked ray: Shadow
        - Unblocked ray: Lit
        - Area Light
            - Multiple rays toward different light positions
            - Soft shadow estimation
        - Pros
            - Direct geometry visibility testing
            - No Shadow Map projection/resolution artifacts
            - Soft shadows
        - Cons
            - High computational cost
            - Benefits from hardware acceleration
                - NVIDIA RTX
                - AMD RDNA2+

    - Light Transport
        - Light interaction with scene geometry
        - Reflection
        - Refraction
        - Shadows
        - Global Illumination

    - Light Tracing / Forward Ray Tracing
        - Light -> Surfaces -> Camera
        - Many paths never reach Camera
        - Inefficient for real-time rendering

    - Camera-based / Backward Ray Tracing
        - Camera -> Surfaces -> Lights
        - Primary Rays
            - Camera through image-plane samples
            - Ray-Scene Intersection
            - Nearest intersection
            - Visible surface identification
            - Material and illumination evaluation
        - Secondary Rays
            - Shadow Ray
                - Light visibility / occlusion
            - Reflection Ray
                - Mirror reflection direction
            - Refraction Ray
                - Transmission through materials
                - Snell's Law
            - Indirect-lighting Ray
                - Additional surface interactions
                - Indirect illumination

    - Path Tracing
        - Stochastic sampling
        - Multiple scattering directions
        - Multiple light bounces
        - Direct and indirect illumination
        - Average many light paths
        - High computational cost

    - Hybrid Rendering
        - Rasterization + Ray Tracing
        - Rasterization for base scene geometry
        - Selective Ray Tracing
            - Shadows
            - Reflections
            - Refractions
            - Indirect Illumination
            - Ray-traced Ambient Occlusion
                - Hemisphere ray sampling
        - Performance vs visual fidelity

- Rendering Architectures
    - Forward Rendering
        - Geometry and lighting in forward shading
        - Fragment-level lighting calculations
        - Simplest form: all lights per fragment
        - Pros
            - Simple implementation
            - Low GPU memory footprint
            - Transparency support
        - Cons
            - Potential redundant lighting calculations
            - Poor scalability with complex lighting
            - Limited post-processing flexibility

    - Deferred Rendering
        - Separate Geometry Pass and Lighting Pass
        - Pass 1: Geometry Pass
            - Render scene geometry
            - Depth Testing
            - Store visible surface information
            - G-buffer (Geometry Buffer)
                - World-space Position
                - Albedo
                - Normal
                - Depth
        - Pass 2: Lighting Pass
            - Read G-buffer
            - Per-screen-pixel lighting
            - Only visible fragments receive lighting calculations
        - Pros
            - Avoid lighting hidden fragments
            - Efficient for complex lighting
            - Supports screen-space effects
                - SSR
                - SSAO
        - Cons
            - G-buffer memory overhead
            - Transparency not directly supported

    - Forward+ Rendering
        - Optimized Forward Rendering
        - Tiled Light Culling
            - Divide screen into tiles
                - Example: 16x16 pixels
            - Obtain Depth Buffer
                - Optional Depth Pre-pass
            - Compute minimum/maximum depth per tile
            - Construct Tile Frustum
                - Camera Projection
                - Tile pixel boundaries
                - Four side planes
                - Near/Far depth planes
            - Light-Frustum Intersection Tests
            - Create per-tile Light Lists
            - Fragment Shader
                - Look up tile's Light List
                - Evaluate candidate lights only
        - Pros
            - Reduced redundant lighting
            - Better scalability with many local lights
            - Transparency support
            - Lower overhead than full Deferred Rendering
        - Cons
            - No built-in full G-buffer
            - More complex SSR/SSAO integration

    - Architecture Comparison
        - Forward
            - Simple
            - Transparency-friendly
            - Potentially expensive with many lights
        - Deferred
            - G-buffer-based
            - Efficient visible-pixel lighting
            - Transparency limitations
        - Forward+
            - Forward shading + Tiled Light Culling
            - Efficient local-light selection
            - Transparency-friendly

- Screen-Space Effects
    - Depth of Field (DOF)
        - Camera focus simulation
        - Focal Plane
        - Depth Buffer
        - Per-pixel blur based on focal distance
        - In-focus vs out-of-focus regions
        - Cinematic rendering

    - Bloom
        - Bright-pixel extraction
        - Emissive pixels
        - Blur bright regions
        - Add blurred result to original image
        - Light bleeding / glow
        - Image-space optical scattering approximation
        - Pipeline
            - Original Image
            - Brightness Extraction
            - Blur
            - Combine

    - Screen Space Reflections (SSR)
        - Reflection using current-frame screen-space data
        - View Direction
        - Surface Normal
        - Reflection Direction
        - Screen-Space Ray Marching
        - Ray Depth vs Scene Depth
        - Approximate intersection detection
        - Surface Roughness
            - Reflection blurring/filtering
        - Limitations
            - Off-screen geometry unavailable
            - Occluded geometry unavailable
            - Missing screen-space information

    - Screen Space Ambient Occlusion (SSAO)
        - Local ambient occlusion approximation
        - Depth Buffer
        - Optional Surface Normals
        - Nearby depth sampling
        - Estimate local geometry occlusion
        - Ambient Visibility
            - More occlusion -> Less ambient lighting
        - Basic SSAO
            - Sphere Sample Kernel
            - Generate samples around surface point
            - Project samples into Screen Space
            - Fetch Scene Depth
            - Compare sample depth and scene depth
            - Estimate occluded-sample fraction
        - Sphere Kernel Problem
            - Samples inside surrounding geometry
            - Incorrect occlusion on flat surfaces
        - Improved SSAO
            - Hemisphere Sample Kernel
            - Oriented along Surface Normal
            - Avoid sampling behind the surface
        - Limitations
            - Missing off-screen geometry
            - Missing occluded geometry
            - Not full indirect lighting

- Environment Mapping
    - Image-Based Lighting
    - Precomputed Environment Texture
    - Approximate reflective surfaces
    - Distant environment representation
    - Cubemap
        - Six cube faces
            - Front
            - Back
            - Left
            - Right
            - Up
            - Down
        - Six square textures or packed regions
    - Reflection Vector
        - Compute reflection direction
        - Map direction to Cubemap texel
        - Sample reflection color
    - Advantages
        - Efficient real-time reflections
        - Low rendering cost

- Lightmapping
    - Precomputed Static Lighting
    - Lightmap: baked lighting texture
    - Static Objects
    - Offline Light Baking
        - Static lighting
        - Shadows
        - Indirect Illumination
    - Runtime
        - Sample Lightmap Texture
        - Reuse baked lighting
        - Reduce real-time lighting calculations
    - Pros
        - Improved runtime performance
        - High-quality precomputed lighting
    - Cons
        - Texture memory usage
        - Memory bandwidth
        - Static lighting/geometry constraints
        - Rebaking after lighting or geometry changes
    - Example
        - The Last of Us (2013)
        - Precalculated environmental lighting

- Key Rendering Trade-offs
    - Visual Fidelity vs Performance
    - Real-time Computation vs Precomputation
    - Rasterization vs Ray Tracing
    - Hard Shadows vs Soft Shadows
    - Shadow Quality vs Shadow Map Resolution
    - Screen-Space Approximation vs Scene Geometry Accuracy
    - Forward vs Deferred vs Forward+
    - GPU Computation vs Memory/Bandwidth
    - Static Lighting vs Dynamic Lighting


## Ref
[👍 Where Do I Start? A Very Gentle Introduction to Computer Graphics Programming]: https://www.scratchapixel.com/lessons/3d-basic-rendering/get-started/gentle-introduction-to-computer-graphics-programming.html

[👍 Shader programming: From absolute beginner to demoscene superstar]: https://clauswilke.com/art/post/shaders

[🎬【老奇】阴差阳错 撼动世界的游戏引擎]: https://www.bilibili.com/video/BV1Hk4y1q7Rz/?share_source=copy_web

[🎬 Quaternions and 3d rotation, explained interactively | 3blue1brown]: https://youtu.be/zjMuIxRvygQ?si=YSktSoW28ZQ_gC3l
[🎬 Visualizing the 4d numbers Quaternions | 3blue1brown]: https://youtu.be/d4EgbgTm0Bg?si=UY9tVl-DgY4TAqRw

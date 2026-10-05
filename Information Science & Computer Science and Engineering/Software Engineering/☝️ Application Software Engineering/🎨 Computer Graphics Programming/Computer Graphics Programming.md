# Computer Graphics Programming

[TOC]



## Res
### Related Topics
↗ [Computer Graphics (CG)](../../../🧠%20Computing%20Methodologies/Computer%20Graphics%20(CG)/Computer%20Graphics%20(CG).md)

↗ [Media Processing & GUI SDK](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/Media%20Processing%20&%20GUI%20SDK.md)
- ↗ [Graphics Rendering Frameworks (2D & 3D)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Graphics%20Rendering%20Frameworks%20(2D%20&%203D).md)
	- ↗ [openGL](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/openGL/openGL.md)
	- ↗ [Mesa Project](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/📌%20Mesa%20Project/Mesa%20Project.md)

↗ [Media Formats & Standards & Codec (Coder-Decoder)](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Media%20Formats%20&%20Standards%20&%20Codec%20(Coder-Decoder)/Media%20Formats%20&%20Standards%20&%20Codec%20(Coder-Decoder).md)
↗ [Graphics Formats & Standards](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Media%20Formats%20&%20Standards%20&%20Codec%20(Coder-Decoder)/Graphics%20Formats%20&%20Standards/Graphics%20Formats%20&%20Standards.md)

↗ [Digital & Video Games Development](Digital%20&%20Video%20Games%20Development/Digital%20&%20Video%20Games%20Development.md)
↗ [GUI Desktop Environments & Windowing Systems](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/GUI%20Desktop%20Environments%20&%20Windowing%20Systems/GUI%20Desktop%20Environments%20&%20Windowing%20Systems.md)
↗ [Desktop & Monolithic Application Development](../Desktop%20&%20Monolithic%20Application%20Development/Desktop%20&%20Monolithic%20Application%20Development.md)

↗ [Compute Unified Device Architecture & CUDA Programming](../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)


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
> ↗ [Linear Algebra & Module-Like Algebraic Structure (模)](../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20(模)/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure%20(模).md)
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
> ↗ [Graphics Rendering Frameworks (2D & 3D)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Graphics%20Rendering%20Frameworks%20(2D%20&%203D).md)
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



## Ref
[👍 Where Do I Start? A Very Gentle Introduction to Computer Graphics Programming]: https://www.scratchapixel.com/lessons/3d-basic-rendering/get-started/gentle-introduction-to-computer-graphics-programming.html

[👍 Shader programming: From absolute beginner to demoscene superstar]: https://clauswilke.com/art/post/shaders

[🎬【老奇】阴差阳错 撼动世界的游戏引擎]: https://www.bilibili.com/video/BV1Hk4y1q7Rz/?share_source=copy_web

[🎬 Quaternions and 3d rotation, explained interactively | 3blue1brown]: https://youtu.be/zjMuIxRvygQ?si=YSktSoW28ZQ_gC3l
[🎬 Visualizing the 4d numbers Quaternions | 3blue1brown]: https://youtu.be/d4EgbgTm0Bg?si=UY9tVl-DgY4TAqRw

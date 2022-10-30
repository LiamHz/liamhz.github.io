# Computer Graphics
## Roadmap
Graphics programming requires knowledge of several areas. Below are some resources for them.

Note: Order to go through topics isn't fixed. Learn whatever you're motivated to.

### Streamlined Real-Time Rendering Roadmap
- A Tour of C++ (or some previous experience with C++)
- [LearnOpenGL][081] or [Vulkan Tutorial][082] - Graphics API
- [The Graphics Codex][029] - Computer graphics theory
- [Graphics Codex Projects][049] Introductory computer graphics projects
- [Immersive Linear Algebra][002] - Linear algebra
- [Real-Time Rendering][084] - Modern rendering techniques

### C++
- A Tour of C++
- Accelerated C++
- Effective C++
- Effective Modern C++

### Linear Algebra
- [Textbook: Linear Algebra, Jim Hefferon][050]
- [Immersive Linear Algebra][002]
- [3b1b's Essence of Linear Algebra][003] - Do practice problems afterwards!

### Computer Graphics Theory
Note: Complete this before doing **Path Tracing** or **Real-time rendering**
- [The Graphics Codex][029]
- [Graphics Codex Projects][049]

### Path Tracing
- [Ray Tracing in One Weekend][046] 1, 2, and 3
- [PBRT][045] - Use this as a references while building my own path tracer, similar to "Ray Tracing Gems", and not a "build together"
- [Ray Tracing Gems][043]

### Real-time Rendering
- [Tiny Renderer - How OpenGL Works][044]
- [LeanOpenGL][006]
- [GPU Gems][031]

NOTE: Portfolio projects should be more than "toy projects" that just implement a few techniques. Make them memorable experiences.

## Project Ideas
- Physically based Vulkan real-time renderer with deferred rendering
- Procedural landscape / city / planet generation, maybe using WFC. Selected resources [here][074], and collection of resources [here][075]
- Remake an iconic video game / movie scene from scratch, and render it with your engine. Scene ideas: Assassin's Creed, The Last of Us, Life is Strange

## Morgan McGuire's Roadmap
[Source][033]
A great sequence for learning rendering for 3D graphics is:

1. Calculus and C++ programming (1 year, prereq)
2. Ray Tracing in One Weekend 1, 2, 3 (5 days)
3. Graphics Codex (3 weeks)
4. RTR4 + Vulkan or DX12 & PBRT (years)

Time estimates are coding time for the projects.

## Courses
- [Scratchapixel][042]
- [Udacity - Interactive 3D Graphics][030]
- [CS6630 - Realistic Image Synthesis][009]
- [CS4620 - Introduction to Computer Graphics][051] - Good source for learning projects

## Resources
- [Convert 3D Model to glTF][076]
- [Kesen's Repository of Graphics Programming Papers][060]
- [Resources on BRDFs][066]
- [List of Engineers Willing to Mentor You][067]

## Articles
### Vulkan
#### Unread
- [I am Graphics and So Can You, Part 1][064]
- [Vulkan C++ Examples and Demos][069]
- [awesome-vulkan][058]
- [RDNA Performance Guide][078]

#### Read
- [How to Learn Vulkan][057]
- [Vulkan in 30 Minutes][070]
- [Using Vulkan Hpp, The C++ Header for Vulkan][071]

### General
#### Unread
- [ninepoints on how to learn graphics programming][077]
- [A list of important graphics research papers][080]
- [How to Start Learning Computer Graphics Programming][041]
- [Graphics in Plain Language][062]
- [Casual Introducation to Low Level Graphics Programming][061]
- [A Trip Through the Graphics Pipeline][063]
- [The Lost Art of 3D Rendering Without Shaders][054]
- [An Opiniated Post on Modern Rendering Abstraction Layers][073]
- [A Primer on Efficient Rendering Algorithms and Clustered Shading][037]
- [Reverse Engineering the Rendering of "The Witcher 3"][055]
- [History of Graphics APIs][065]
- [Readings on Physically Based Rendering][047]
- [Normal transformation][011]
- [Stop Using Normal Matrix][012]

#### Read
- [Drinking from the Firehose: Learning Computer Graphics Techniques and Programming][036]
- [csp's thoughts on computer graphics as a career][032]
- [An Explanation of the Rendering Equation][085]

### Techniques
### Unread
- [Physically Based Rendering in Filament][087]

### Read
- [A Brief Primer on Efficient Rendering Algorithms and Clustered Shading][79]

### Job Hunt
- [Applying for Entry Level Graphics Jobs][072]
- [Common Junior Graphics Programming Interview Questions][039]

## Presentations / Talks
### Unread
- [JSConf US 2013, Steven Wittens: Making WebGL Dance][056]

## Projects for Beginners
- Make a sphere mesh using spherical coordinates, and render it.
- Implement shader for simple diffuse and specular shading.
- Directional Lights, point lights, and spot lights
DONE Heightmap Rendering
- Write a simple parser for a simple mesh format such as Wavefront .obj, import it into your program and render it. In particular, try and import and render meshes with textures.
- Implement a simple Minecraft renderer. It is surprisingly simple to render Minecraft-like worlds, and it is also very learningful.
- Render reflections using cubemaps
- Shadow rendering using shadow maps.
- Implement view frustum culling. This is a simple, yet very practical optimization technique.
- Implement rendering of particle systems
- Learn how to implement Gamma Correction.
- Implement normal mapping
- Learn how to render lots of meshes efficiently with instanced rendering
- Animate meshes with mesh skinning.

### Read
- [GDC 2018 - How Hard is Vulkan Really][068]

## Portfolio Projects I Like
- [Linden Reid's Shaders][034]
- [Tristan Hume's Photo-realistic Path Tracer][052]

## Job Postings
### Rendering Programmer Internship - Epic Games
Qualifications:
- Strong C++ skills
- In-depth experience with real-time rendering
- Knowledge and proficient application of 3D math, rendering algorithms, and data structures
- Exposure to a broad range of graphics APIs and shader languages including DirectX and OpenGL/GLSL
- Performance minded development and optimization skills
- Strong communication and follow-through working with others to develop and iterate on features/tools
- Examples of projects in gaming or game engine technology a plus

### Graphics Programmer (All Levels) - Rockstar
Skills
- Experience with C/C++ programming.
- Experience with HLSL, Cg or other vendor specific shader programming language.
- Ability to work with artists, designers and other content creators to make sure they can get the most out of the technology.

Pluses
Please note that these are desirable skills and are not required to apply for the position.
- Experience with 3D graphics APIs (Direct3D 11+, OpenGL, Vulkan and/or vendor specific).
- At least one shipped title; preferably on the Xbox and/or Playstation consoles.
- Experience with multithreaded programming.
- Experience optimizing both performance factors and memory footprints using hardware and software profilers (PIX, GCM Replay, Tuner, Vtune, etc.).

## Shaders

### Tutorials
- [3D Game Shaders for Beginners][018]
- [The Making of The Drive Home][001]
- [Shader Coding - The Art of Code][sc-art-of-code]
- [Shane's commented shaders][025]
- [Game Art Tricks][008]
- [A Journey into Journey's Sand Shader][journey-shader]

### Inspiration
- [Shadertoy](https://www.shadertoy.com/)
- [iq's SDF Demos][019]

### Resources
- [docs.gl][docs-gl]
- [KodeLife - Real-time GPU Shader Editor][002] - Real-time graphics programming IDE. OpenGL without the boilerplate.

### Completed Resources
- [Shaders: A Primer][014] - Overview of what vertex and fragment shaders do.
- [Shader School][013] - Interactive course explaining the theory and practice of vertex and fragment shaders, Blinn-Phong lighting, and matrices for affine transformations and changing between coordinate spaces.
- [Fragment Foundry][015] Intro to fragment shaders and SDFs, Shadertoy style
- [Ray Marching and Signed Distance Functions][003]
- [The Book of Shaders][053] - An interactive book that teaches different fragment shader techniques.

### Reference Shaders
- [Raymarching Primitives Commented, iq][021] - Best practices for raymarching
- [Chromatic Abberation][024]

### Misc Notes
#### Ternaries, Branching, and Early Termination are Fine in Shaders
Contrary to some older resources (e.g. Shader School), this [shader][020] by iq shows that using ternaries, branching (if), and early termination in for loops is more performant than step and other fancy operations in GLSL. In older hardware and versions of GLSL this was true in some cases, but generally isn't anymore

#### The Size of Demos vs Intros
From iq's [talk][022] "Rendering Worlds with Two Triangles in 4096 bytes".

- Visual beauty is not a linear function of the size in kilobytes, but rather sigmoidal. Believes that the optimal "vibes per kilobyte" is around 100kb demos.

### Techniques
```glsl

// Cosine based palette
// From iq: shadertoy.com/view/ll2GD3
vec3 palette(float t) {
    // Palette parameters
    vec3 a = vec3(0.5);
    vec3 b = vec3(0.5);
    vec3 c = vec3(1.0);
    vec3 d = vec3(0.0, 0.10, 0.2);
    return a + b*cos(6.28318*(c*t+d));
}

// 3D Rotation matrices
mat4 rotateX(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat4( 1, 0, 0, 0,
                 0, c,-s, 0,
                 0, s, c, 0,
                 0, 0, 0, 1);
}

mat4 rotateY(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat4( c, 0, s, 0,
                 0, 1, 0, 0,
                -s, 0, c, 0,
                 0, 0, 0, 1);
}

mat4 rotateZ(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat4( c,-s, 0, 0,
                 s, c, 0, 0,
                 0, 0, 1, 0,
                 0, 0, 0, 1);
}

// Constructive Solid Geometry (CSG) operations
float intersectSDF(float distA, float distB) {
    return max(distA, distB);
}

float unionSDF(float distA, float distB) {
    return min(distA, distB);
}

float differenceSDF(float distA, float distB) {
    return max(distA, -distB);
}

// Blinn-Phong Lighting
struct Light {
    vec3 position;
    vec3 intensity;
};

vec3 getLightContrib(vec3 p, vec3 normal, vec3 viewPos,
                     vec3 k_d, vec3 k_s, float shininess, Light light) {
    vec3 N = normal;                        // Normal
    vec3 L = normalize(light.position - p); // Light vector
    vec3 V = normalize(viewPos - p);        // View vector
    vec3 R = normalize(reflect(-L, N));     // Reflect vector
    
    float diff = max(dot(L, N), 0.0);
    float spec = pow(max(dot(R, V), 0.0), shininess);

    vec3 diffuse  = k_d * diff;
    vec3 specular = k_s * spec;

    return light.intensity * (diffuse + specular);
}

vec3 getLighting(vec3 p, vec3 eye) {
    vec3 k_a = vec3(0.3);
    vec3 k_d = vec3(0.7);
    vec3 k_s = vec3(1.0);
    float shininess = 8.0;

    vec3 ambientLightIntensity = vec3(0.2);
    vec3 lighting = k_a * ambientLightIntensity;

    Light light1;
    light1.intensity = vec3(0.4);
    light1.position  = vec3(4.0, 2.0, 4.0);

    Light light2;
    light2.intensity = vec3(0.4);
    light2.position  = vec3(2.0, 2.0, 2.0);

    lighting += getLightContrib(p, eye, k_d, k_s, shininess, light1);
    lighting += getLightContrib(p, eye, k_d, k_s, shininess, light2);

    return lighting;
}

// Get direction for ray going from origin to fragCoord
vec3 getRayDirection(float fov, vec2 resolution, vec2 fragCoord) {
    // Move origin from bottom left to center of screen
    vec2 xy = fragCoord - resolution / 2.0;
    
    // Get the z-distance from pixel given resolution and vertical FoV
    // Diagram shows that: tan(radians(fov)/2) == (resolution.y * 0.5) / z
    // Diagram: https://stackoverflow.com/a/10018680
    // Isolating for z gives
    float z = (resolution.y * 0.5) / tan(radians(fov) / 2.0);
    return normalize(vec3(xy, -z));
}

// Estimate normal of surface at point p by sampling nearby points
vec3 estimateNormal(vec3 p) {
    return normalize(vec3(
        sceneSDF(vec3(p.x + EPSILON, p.y, p.z)) - sceneSDF(vec3(p.x - EPSILON, p.y, p.z)),
        sceneSDF(vec3(p.x, p.y + EPSILON, p.z)) - sceneSDF(vec3(p.x, p.y - EPSILON, p.z)),
        sceneSDF(vec3(p.x, p.y, p.z + EPSILON)) - sceneSDF(vec3(p.x, p.y, p.z - EPSILON))
    ));
}

// Ray marching parameters
const int MAX_MARCHING_STEPS = 255;
const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;
const float EPSILON = 0.0001;

// Ray marching: return shortest distance from the eye to the any surface along ray

float shortestDistanceToSurface(vec3 viewPos, vec3 ray,float initialDepth, float maxDepth) {
    float depth = initialDepth;
    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {
        // Distance from closest surface
        // Negative dist indicates surface intersection
        float dist = sceneSDF(viewPos + depth * ray);
        if (dist < EPSILON) {
            return depth;
        }
        depth += dist;
        if (depth >= maxDepth) {
            return maxDepth;
        }
    }
    return maxDepth;
}
```

## <!-- Links -->
[sc-art-of-code]: https://www.youtube.com/playlist?list=PLGmrMu-IwbgsVjE7SAtFaWyhZXyBjJNnO
[journey-shader]: https://www.alanzucconi.com/2019/10/08/journey-sand-shader-1/
[parallel-udacity]: https://classroom.udacity.com/courses/cs344
[docs-gl]: http://docs.gl/
[001]: https://shadered.org/ 
[002]: https://hexler.net/products/kodelife
[003]: http://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/
[004]: https://github.com/stackgl/webgl-workshop
[005]: https://youtu.be/0ifChJ0nJfM
[006]: https://learnopengl.com/
[008]: https://simonschreibt.de/game-art-tricks/
[009]: http://www.cs.cornell.edu/courses/cs6630/2015fa/index.shtml
[010]: http://www.geisswerks.com/ryan/FAQS/learn.html
[011]: https://paroj.github.io/gltut/Illumination/Tut09%20Normal%20Transformation.html
[012]: https://lxjk.github.io/2017/10/01/Stop-Using-Normal-Matrix.html
[013]: https://github.com/stackgl/shader-school
[014]: https://notes.underscorediscovery.com/shaders-a-primer/
[015]: http://hughsk.io/fragment-foundry/chapters/01-hello-world.html
[017]: https://jvns.ca/blog/2020/03/15/writing-shaders-with-signed-distance-functions/
[018]: https://github.com/lettier/3d-game-shaders-for-beginners
[019]: https://www.iquilezles.org/www/articles/raymarchingdf/raymarchingdf.htm
[020]: https://www.shadertoy.com/view/wlsGDl
[021]: https://www.shadertoy.com/view/ltyXD3
[022]: https://www.iquilezles.org/www/material/nvscene2008/rwwtt.pdftalk
[024]: https://www.shadertoy.com/view/Mds3zn
[025]: https://www.shadertoy.com/user/Shane
[029]: https://graphicscodex.com/
[030]: https://classroom.udacity.com/courses/cs291
[031]: https://developer.nvidia.com/gpugems/gpugems/foreword
[032]: https://www.reddit.com/r/cscareerquestions/comments/9wmjrc/computer_graphicsvrar_career_field/ea6g3j6/
[033]: https://twitter.com/CasualEffects/status/1061645994247577601
[034]: https://lin-reid.squarespace.com/shader-highlights
[036]: https://miketuritzin.com/post/how-to-learn-computer-graphics-techniques-and-programming/
[037]: http://www.aortiz.me/2018/12/21/CG.html
[039]: https://erkaman.github.io/posts/junior_graphics_programmer_interview.html
[041]: https://erkaman.github.io/posts/beginner_computer_graphics.html
[042]: https://www.scratchapixel.com/
[043]: https://www.realtimerendering.com/raytracinggems/
[044]: https://github.com/ssloy/tinyrenderer/wiki/Lesson-0-getting-started
[045]: http://www.pbr-book.org/3ed-2018/contents.html
[046]: https://raytracing.github.io/
[047]: https://interplayoflight.wordpress.com/2013/12/30/readings-on-physically-based-rendering/
[049]: http://graphicscodex.com/projects/projects/index.html
[050]: http://joshua.smcvt.edu/linearalgebra/book.pdf
[051]: http://www.cs.cornell.edu/courses/cs4620/2019fa/
[052]: https://thume.ca/ray-tracer-site/
[053]: https://thebookofshaders.com/
[054]: http://machinethink.net/blog/3d-rendering-without-shaders/
[055]: https://astralcode.blogspot.com/2018/11/reverse-engineering-rendering-of.html
[056]: https://youtu.be/GNO_CYUjMK8
[057]: https://www.jeremyong.com/c++/vulkan/graphics/rendering/2018/03/26/how-to-learn-vulkan/
[058]: https://github.com/vinjn/awesome-vulkan/blob/master/README.md#tutorial
[060]: http://kesen.realtimerendering.com/
[061]: http://stephaniehurlburt.com/blog/2016/10/28/casual-introduction-to-low-level-graphics-programming
[062]: https://renderdoc.org/blog/Graphics-in-Plain-Language/
[063]: https://fgiesen.wordpress.com/2011/07/09/a-trip-through-the-graphics-pipeline-2011-index/
[064]: https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-1
[065]: https://softwareengineering.stackexchange.com/questions/60544/why-do-game-developers-prefer-windows/88055#88055
[066]: https://twitter.com/erkaman2/status/1068648036824424450?s=20
[067]: http://stephaniehurlburt.com/blog/2016/11/14/list-of-engineers-willing-to-mentor-you
[068]: https://youtu.be/0R23npUCCnw
[069]: https://github.com/SaschaWillems/Vulkan
[070]: https://renderdoc.org/vulkan-in-30-minutes.html
[071]: https://www.youtube.com/watch?v=qEOsHFFomWg
[072]: http://alextardif.com/GraphicsJobGuide.html
[073]: http://alextardif.com/RenderingAbstractionLayers.html
[074]: https://www.one-tab.com/page/vkXJYghpR8ecWbWAs82Rsg
[075]: https://firespark.de/?id=article&article=ProceduralGenerationResources
[076]: https://www.creators3d.com/online-viewer
[077]: https://twitter.com/m_ninepoints/status/1215429886715629569?s=20
[078]: https://gpuopen.com/performance/
[079]: http://www.aortiz.me/2018/12/21/CG.html
[080]: http://lousodrome.net/blog/light/2013/09/22/a-list-of-important-graphics-research-papers/
[081]: https://learnopengl.com/
[082]: https://vulkan-tutorial.com/
[084]: https://www.realtimerendering.com/
[085]: https://youtu.be/eo_MTI-d28s
[087]: https://google.github.io/filament/Filament.md

// Theme system removed - light theme only


// Progressive Video Loading with Intersection Observer
function initVideoLazyLoading() {
    // Create intersection observer for videos
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const source = video.querySelector('source');
                
                // Add lazy-video class and loading state
                video.classList.add('lazy-video', 'loading');
                
                // Load video source
                if (video.dataset.src && !video.src) {
                    video.src = video.dataset.src;
                    if (source && source.dataset.src) {
                        source.src = source.dataset.src;
                    }
                    
                    // Load the video
                    video.load();
                    
                    // Handle video loading events
                    video.addEventListener('loadeddata', () => {
                        // Remove loading state and add loaded state
                        video.classList.remove('loading');
                        video.classList.add('loaded');
                        
                        // Start playing with smooth transition
                        setTimeout(() => {
                            video.play().catch(e => console.log('Video autoplay failed:', e));
                        }, 300); // Small delay to let animation finish
                    });
                    
                    // Handle loading errors
                    video.addEventListener('error', () => {
                        video.classList.remove('loading');
                        console.log('Video failed to load:', video.dataset.src);
                    });
                }
                
                // Stop observing this video
                observer.unobserve(video);
            }
        });
    }, {
        // Start loading when video is 20% visible
        threshold: 0.2,
        // Start loading 150px before video comes into view
        rootMargin: '150px'
    });
    
    // Observe all videos with data-src attribute
    document.querySelectorAll('video[data-src]').forEach(video => {
        videoObserver.observe(video);
    });
}

// Progressive Image Loading with Intersection Observer
function initImageLazyLoading() {
    // Create intersection observer for images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load image source
                if (img.dataset.src && img.src !== img.dataset.src) {
                    // Add loading class for smooth animation
                    img.classList.add('loading');
                    
                    // Create new image to preload
                    const newImg = new Image();
                    newImg.onload = () => {
                        // Once loaded, replace src and add loaded state with smooth transition
                        img.src = img.dataset.src;
                        img.classList.remove('loading');
                        img.classList.add('loaded');
                        
                        // Trigger reflow to ensure smooth animation
                        img.offsetHeight;
                    };
                    newImg.onerror = () => {
                        // If image fails to load, show error placeholder
                        img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23f5f5f7'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%2386868b' text-anchor='middle' dy='.3em'%3EImage failed to load%3C/text%3E%3C/svg%3E";
                        img.classList.remove('loading');
                        console.log('Image failed to load:', img.dataset.src);
                    };
                    newImg.src = img.dataset.src;
                }
                
                // Stop observing this image
                observer.unobserve(img);
            }
        });
    }, {
        // Start loading when image is 10% visible
        threshold: 0.1,
        // Start loading 100px before image comes into view for smoother experience
        rootMargin: '100px'
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Video interactions
document.querySelectorAll('.video-item video').forEach(video => {
    video.addEventListener('loadstart', () => {
        console.log('Video loading started');
    });
});

// Intersection observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Interactive Demo - Hierarchical Navigation System
// 
// CONFIGURATION GUIDE:
// 1. Set maxCategoryLevels to desired depth (1=2 levels total, 2=3 levels total, etc.)
// 2. Structure your data accordingly:
//    - For 2 levels: scenarios -> categories -> videos
//    - For 3 levels: scenarios -> categories -> categories -> videos
//    - For 4 levels: scenarios -> categories -> categories -> categories -> videos
// 3. The system will automatically handle navigation for any depth
//
// EXAMPLES:
// maxCategoryLevels: 1 → scenarios → categories → videos (current setup)
// maxCategoryLevels: 2 → scenarios → categories → subcategories → videos
// maxCategoryLevels: 3 → scenarios → categories → subcategories → subsubcategories → videos
//
// EXAMPLE 3-LEVEL STRUCTURE (maxCategoryLevels: 2):
// health_fitness: {
//     name: "Health & Fitness",
//     categories: {
//         exercise: {
//             name: "Exercise", 
//             categories: {
//                 cardio: { name: "Cardio", videos: {...} },
//                 strength: { name: "Strength", videos: {...} }
//             }
//         }
//     }
// }
//
const demoData = {
    datasets: [
        {
            name: "ARCTIC",
            thumbnail: "assets/image/dataset/thumb_arctic.jpg",
            tasks: [
                {
                    name: "Articulated Objects",
                    video: "assets/video/arctic/articulated_objects.mp4",
                    thumbnail: "assets/image/scenarios/arctic_articulated.jpg"
                },
                {
                    name: "Hand Tracking",
                    video: "assets/video/arctic/hand_tracking.mp4",
                    thumbnail: "assets/image/scenarios/arctic_tracking.jpg"
                },
                {
                    name: "Complex Grasping",
                    video: "assets/video/arctic/complex_grasping.mp4",
                    thumbnail: "assets/image/scenarios/arctic_grasping.jpg"
                }
            ]
        },
        {
            name: "DexYCB",
            thumbnail: "assets/image/dataset/thumb_dex-ycb.jpg",
            tasks: [
                {
                    name: "Dexterous Grasping",
                    video: "assets/video/dexycb/dexterous_grasping.mp4",
                    thumbnail: "assets/image/scenarios/dexycb_grasping.jpg"
                },
                {
                    name: "Object Manipulation",
                    video: "assets/video/dexycb/object_manipulation.mp4",
                    thumbnail: "assets/image/scenarios/dexycb_manipulation.jpg"
                },
                {
                    name: "Precision Tasks",
                    video: "assets/video/dexycb/precision_tasks.mp4",
                    thumbnail: "assets/image/scenarios/dexycb_precision.jpg"
                }
            ]
        },
        {
            name: "EgoDex",
            thumbnail: "assets/image/dataset/thumb_egodex.jpg",
            tasks: [
                {
                    name: "Egocentric Manipulation",
                    video: "assets/video/task/egodex/04-000004ca_pred.mp4",
                    thumbnail: "assets/video/task/egodex/04-000004ca_frame.png"
                },
                {
                    name: "Daily Activities",
                    video: "assets/video/egodex/daily_activities.mp4",
                    thumbnail: "assets/image/scenarios/egodex_daily.jpg"
                },
                {
                    name: "Tool Usage",
                    video: "assets/video/egodex/tool_usage.mp4",
                    thumbnail: "assets/image/scenarios/egodex_tools.jpg"
                }
            ]
        },
        {
            name: "FPHA",
            thumbnail: "assets/image/dataset/thumb_fpha.jpg",
            tasks: [
                {
                    name: "Hand Gestures",
                    video: "assets/video/fpha/hand_gestures.mp4",
                    thumbnail: "assets/image/scenarios/fpha_gestures.jpg"
                },
                {
                    name: "Object Interaction",
                    video: "assets/video/fpha/object_interaction.mp4",
                    thumbnail: "assets/image/scenarios/fpha_objects.jpg"
                },
                {
                    name: "Manipulation Tasks",
                    video: "assets/video/fpha/manipulation_tasks.mp4",
                    thumbnail: "assets/image/scenarios/fpha_manipulation.jpg"
                }
            ]
        },
        {
            name: "H2O",
            thumbnail: "assets/image/dataset/thumb_h2o.jpg",
            tasks: [
                {
                    name: "Two-Hand Coordination",
                    video: "assets/video/h2o/two_hand_coordination.mp4",
                    thumbnail: "assets/image/scenarios/h2o_coordination.jpg"
                },
                {
                    name: "Object Handover",
                    video: "assets/video/h2o/object_handover.mp4",
                    thumbnail: "assets/image/scenarios/h2o_handover.jpg"
                },
                {
                    name: "Collaborative Manipulation",
                    video: "assets/video/h2o/collaborative_manipulation.mp4",
                    thumbnail: "assets/image/scenarios/h2o_collaborative.jpg"
                }
            ]
        },
        {
            name: "OAKINK2",
            thumbnail: "assets/image/dataset/thumb_oakink2.jpg",
            tasks: [
                {
                    name: "Intent Recognition",
                    video: "assets/video/oakink2/intent_recognition.mp4",
                    thumbnail: "assets/image/scenarios/oakink2_intent.jpg"
                },
                {
                    name: "Affordance Learning",
                    video: "assets/video/oakink2/affordance_learning.mp4",
                    thumbnail: "assets/image/scenarios/oakink2_affordance.jpg"
                },
                {
                    name: "Interaction Prediction",
                    video: "assets/video/oakink2/interaction_prediction.mp4",
                    thumbnail: "assets/image/scenarios/oakink2_prediction.jpg"
                }
            ]
        },
        {
            name: "TACO",
            thumbnail: "assets/image/dataset/thumb_taco.jpg",
            tasks: [
                {
                    name: "Kitchen Cooking",
                    video: "assets/video/taco/kitchen_cooking.mp4",
                    thumbnail: "assets/image/scenarios/taco_cooking.jpg"
                },
                {
                    name: "Kitchen Cleaning",
                    video: "assets/video/taco/kitchen_cleaning.mp4",
                    thumbnail: "assets/image/scenarios/taco_cleaning.jpg"
                },
                {
                    name: "Food Handling",
                    video: "assets/video/taco/food_handling.mp4",
                    thumbnail: "assets/image/scenarios/taco_food.jpg"
                }
            ]
        },
        {
            name: "Taste-Rob",
            thumbnail: "assets/image/dataset/thumb_taste-rob.jpg",
            tasks: [
                {
                    name: "Robotic Cooking",
                    video: "assets/video/taste-rob/robotic_cooking.mp4",
                    thumbnail: "assets/image/scenarios/taste_rob_cooking.jpg"
                },
                {
                    name: "Ingredient Handling",
                    video: "assets/video/taste-rob/ingredient_handling.mp4",
                    thumbnail: "assets/image/scenarios/taste_rob_ingredients.jpg"
                },
                {
                    name: "Utensil Manipulation",
                    video: "assets/video/taste-rob/utensil_manipulation.mp4",
                    thumbnail: "assets/image/scenarios/taste_rob_utensils.jpg"
                }
            ]
        }
    ]
};

// Demo State Management - Dataset -> Task interaction
let currentNavigation = {
    datasetIndex: null,
    taskIndex: null
};

let datasetSliderOffset = 0;
let taskSliderOffset = 0;
const sliderStep = 250; // pixels per slide (adjusted for larger cards)

// Initialize the demo
function initDemo() {
    console.log('Initializing dataset -> task interactive demo');
    renderDatasets();
    renderTasks(); // Initially show placeholder
    resetNavigation();
    
    // Auto-select first dataset
    if (demoData.datasets.length > 0) {
        selectDataset(0);
    }
    
    const totalTasks = demoData.datasets.reduce((total, dataset) => {
        return total + dataset.tasks.length;
    }, 0);
    console.log('Demo initialized with', demoData.datasets.length, 'datasets and', totalTasks, 'total tasks');
}

// Render datasets in slider
function renderDatasets() {
    const datasetTrack = document.getElementById('datasetTrack');
    if (!datasetTrack) return;
    
    datasetTrack.innerHTML = '';
    
    demoData.datasets.forEach((dataset, index) => {
        const card = document.createElement('div');
        card.className = 'dataset-card';
        card.onclick = () => selectDataset(index);
        
        card.innerHTML = `
            <div class="dataset-image">
                <img src="${dataset.thumbnail}" alt="${dataset.name}" onerror="this.src='assets/image/framework.png'">
                <div class="dataset-text-overlay">${dataset.name}</div>
            </div>
            <div class="dataset-name">${dataset.name}</div>
        `;
        
        datasetTrack.appendChild(card);
    });
    
    updateDatasetSliderControls();
}

// Render tasks in slider for selected dataset
function renderTasks(datasetIndex = null) {
    const taskTrack = document.getElementById('taskTrack');
    if (!taskTrack) return;
    
    taskTrack.innerHTML = '';
    
    // If no dataset selected, show placeholder
    if (datasetIndex === null || !demoData.datasets[datasetIndex]) {
        const placeholder = document.createElement('div');
        placeholder.className = 'task-placeholder';
        placeholder.innerHTML = `
            <div class="placeholder-content">
                <div class="placeholder-icon">📋</div>
                <p>Select a dataset to view tasks</p>
            </div>
        `;
        taskTrack.appendChild(placeholder);
        return;
    }
    
    const dataset = demoData.datasets[datasetIndex];
    dataset.tasks.forEach((task, taskIndex) => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.onclick = () => selectTask(taskIndex);
        
        card.innerHTML = `
            <div class="task-image">
                <img src="${task.thumbnail}" alt="${task.name}" onerror="this.src='assets/image/framework.png'">
            </div>
            <div class="task-name">${task.name}</div>
        `;
        
        taskTrack.appendChild(card);
    });
    
    updateTaskSliderControls();
}

// Dataset slider controls
function slideDatasets(direction) {
    const viewport = document.querySelector('.dataset-section .slider-viewport');
    const track = document.getElementById('datasetTrack');
    if (!viewport || !track) return;
    
    const viewportWidth = viewport.offsetWidth;
    const trackWidth = track.scrollWidth;
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    
    // Check if button should be disabled
    const leftBtn = document.getElementById('datasetSliderLeft');
    const rightBtn = document.getElementById('datasetSliderRight');
    
    if (direction === 'left' && leftBtn && !leftBtn.disabled) {
        datasetSliderOffset = Math.max(0, datasetSliderOffset - sliderStep);
    } else if (direction === 'right' && rightBtn && !rightBtn.disabled) {
        datasetSliderOffset = Math.min(maxOffset, datasetSliderOffset + sliderStep);
    }
    
    track.style.transform = `translateX(-${datasetSliderOffset}px)`;
    updateDatasetSliderControls();
}

// Task slider controls
function slideTasks(direction) {
    const viewport = document.querySelector('.task-section .slider-viewport');
    const track = document.getElementById('taskTrack');
    if (!viewport || !track) return;
    
    const viewportWidth = viewport.offsetWidth;
    const trackWidth = track.scrollWidth;
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    
    // Check if button should be disabled
    const leftBtn = document.getElementById('taskSliderLeft');
    const rightBtn = document.getElementById('taskSliderRight');
    
    if (direction === 'left' && leftBtn && !leftBtn.disabled) {
        taskSliderOffset = Math.max(0, taskSliderOffset - sliderStep);
    } else if (direction === 'right' && rightBtn && !rightBtn.disabled) {
        taskSliderOffset = Math.min(maxOffset, taskSliderOffset + sliderStep);
    }
    
    track.style.transform = `translateX(-${taskSliderOffset}px)`;
    updateTaskSliderControls();
}

function updateDatasetSliderControls() {
    const leftBtn = document.getElementById('datasetSliderLeft');
    const rightBtn = document.getElementById('datasetSliderRight');
    const viewport = document.querySelector('.dataset-section .slider-viewport');
    const track = document.getElementById('datasetTrack');
    
    if (!leftBtn || !rightBtn || !viewport || !track) return;
    
    const viewportWidth = viewport.offsetWidth;
    const trackWidth = track.scrollWidth;
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    
    // Always show buttons
    leftBtn.style.display = 'flex';
    rightBtn.style.display = 'flex';
    
    // Enable/disable based on current position
    if (trackWidth > viewportWidth) {
        leftBtn.disabled = datasetSliderOffset <= 0;
        rightBtn.disabled = datasetSliderOffset >= maxOffset;
    } else {
        leftBtn.disabled = true;
        rightBtn.disabled = true;
    }
    
    // Update visual state
    leftBtn.style.opacity = leftBtn.disabled ? '0.3' : '1';
    rightBtn.style.opacity = rightBtn.disabled ? '0.3' : '1';
    leftBtn.style.cursor = leftBtn.disabled ? 'default' : 'pointer';
    rightBtn.style.cursor = rightBtn.disabled ? 'default' : 'pointer';
}

function updateTaskSliderControls() {
    const leftBtn = document.getElementById('taskSliderLeft');
    const rightBtn = document.getElementById('taskSliderRight');
    const viewport = document.querySelector('.task-section .slider-viewport');
    const track = document.getElementById('taskTrack');
    
    if (!leftBtn || !rightBtn || !viewport || !track) return;
    
    const viewportWidth = viewport.offsetWidth;
    const trackWidth = track.scrollWidth;
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    
    // Always show buttons
    leftBtn.style.display = 'flex';
    rightBtn.style.display = 'flex';
    
    // Enable/disable based on current position
    if (trackWidth > viewportWidth) {
        leftBtn.disabled = taskSliderOffset <= 0;
        rightBtn.disabled = taskSliderOffset >= maxOffset;
    } else {
        leftBtn.disabled = true;
        rightBtn.disabled = true;
    }
    
    // Update visual state
    leftBtn.style.opacity = leftBtn.disabled ? '0.3' : '1';
    rightBtn.style.opacity = rightBtn.disabled ? '0.3' : '1';
    leftBtn.style.cursor = leftBtn.disabled ? 'default' : 'pointer';
    rightBtn.style.cursor = rightBtn.disabled ? 'default' : 'pointer';
}

// Select dataset
function selectDataset(datasetIndex) {
    currentNavigation.datasetIndex = datasetIndex;
    currentNavigation.taskIndex = null;
    
    // Update visual selection
    document.querySelectorAll('.dataset-card').forEach((card, index) => {
        if (index === datasetIndex) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
    
    // Render tasks for the selected dataset
    renderTasks(datasetIndex);
    
    // Reset task slider offset when dataset changes
    taskSliderOffset = 0;
    const taskTrack = document.getElementById('taskTrack');
    if (taskTrack) {
        taskTrack.style.transform = 'translateX(0)';
    }
    
    // Clear video display when dataset changes
    const videoDisplay = document.getElementById('videoDisplay');
    if (videoDisplay) {
        videoDisplay.innerHTML = `
            <div class="demo-placeholder">
                <div class="icon">🎬</div>
                <p>Select a task to begin</p>
            </div>
        `;
        videoDisplay.classList.remove('playing');
    }
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    
    const dataset = demoData.datasets[datasetIndex];
    console.log('Selected dataset:', dataset.name, 'with', dataset.tasks.length, 'tasks');
}

// Select task
function selectTask(taskIndex) {
    // Make sure we have a dataset selected
    if (currentNavigation.datasetIndex === null) return;
    
    currentNavigation.taskIndex = taskIndex;
    
    // Update visual selection
    document.querySelectorAll('.task-card').forEach((card, index) => {
        if (index === taskIndex) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
    
    // Get the task from the current dataset
    const dataset = demoData.datasets[currentNavigation.datasetIndex];
    const task = dataset.tasks[taskIndex];
    
    // Directly play the task video
    if (task && task.video) {
        showVideo(task.video, task.name);
    }
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    
    console.log('Selected task:', task.name, 'from dataset:', dataset.name);
}

// Update integrated breadcrumb navigation
function updateIntegratedBreadcrumb() {
    const breadcrumbNav = document.getElementById('breadcrumbNav');
    const breadcrumbPath = document.getElementById('breadcrumbPath');
    
    if (!breadcrumbNav || !breadcrumbPath) return;
    
    // Build and display current path
    const pathItems = buildBreadcrumbPath();
    breadcrumbPath.innerHTML = pathItems.length > 0 ? pathItems.join(' › ') : 'Select dataset and task to begin';

    // Show breadcrumb navigation
    breadcrumbNav.style.display = 'block';
}

// Function removed - no longer needed for simplified 2-step process

// Select category at specific level (modular)
function selectCategory(categoryKey, level) {
    // Truncate categories array to current level
    currentNavigation.categories = currentNavigation.categories.slice(0, level);
    // Set category at current level
    currentNavigation.categories[level] = categoryKey;
    
    // Update visual selection for categories
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Find and select the clicked category button
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        if (btn.textContent.trim() === demoData.scenarios[currentNavigation.scenario].categories[categoryKey].name) {
            btn.classList.add('selected');
        }
    });
    
    // Automatically play the category's video
    const scenario = demoData.scenarios[currentNavigation.scenario];
    const category = scenario.categories[categoryKey];
    if (category && category.video) {
        currentNavigation.selectedVideo = categoryKey;
        showVideo(category.video, category.name);
    }
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    console.log(`Selected category level ${level}:`, categoryKey);
}

// Backwards compatibility wrapper
function selectCategory1(categoryKey) {
    selectCategory(categoryKey, 0);
}

// Build breadcrumb path display (dataset -> task navigation)
function buildBreadcrumbPath() {
    const pathItems = [];
    
    if (currentNavigation.datasetIndex !== null) {
        const dataset = demoData.datasets[currentNavigation.datasetIndex];
        pathItems.push(`<span class="breadcrumb-item clickable" onclick="navigateFromBreadcrumb('dataset')">${dataset.name}</span>`);
        
        // Add task if selected
        if (currentNavigation.taskIndex !== null) {
            const task = dataset.tasks[currentNavigation.taskIndex];
            if (task) {
                pathItems.push(`<span class="breadcrumb-item">${task.name}</span>`);
            }
        }
    }
    
    return pathItems;
}


// Build breadcrumb options display (legacy - no longer used)
function buildBreadcrumbOptions() {
    return '';
}

// Select video (legacy function - no longer used in simplified 2-level structure)
function selectVideo() {
    console.log('selectVideo function called but no longer needed in simplified structure');
}

// Render categories in scenario-section
function renderCategories(scenarioKey) {
    const categoryContainer = document.getElementById('categoryContainer');
    if (!categoryContainer) return;
    
    const scenario = demoData.scenarios[scenarioKey];
    if (!scenario || !scenario.categories) {
        categoryContainer.innerHTML = `
            <div class="category-selection">
                <span class="category-title">Select Action</span>
                <div class="category-options">
                    <span class="breadcrumb-hint">Select a scene first</span>
                </div>
            </div>
        `;
        categoryContainer.style.display = 'block';
        return;
    }
    
    // Build category buttons (each category has its own video)
    const categoryButtons = Object.keys(scenario.categories).map(categoryKey => {
        const category = scenario.categories[categoryKey];
        return `<button class="category-btn" onclick="selectCategory('${categoryKey}', 0)">${category.name}</button>`;
    }).join('');
    
    categoryContainer.innerHTML = `
        <div class="category-selection">
            <span class="category-title">Select Action</span>
            <div class="category-options">${categoryButtons}</div>
        </div>
    `;
    categoryContainer.style.display = 'block';
}

// Show dataset image function
function showDatasetImage(imageSrc, title) {
    const videoDisplay = document.getElementById('videoDisplay');
    if (!videoDisplay) return;
    
    // Create image element
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = title;
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.objectFit = 'cover';
    image.style.borderRadius = 'var(--border-radius-medium)';
    
    // Handle image loading error
    image.onerror = () => {
        console.error('Image failed to load:', imageSrc);
        image.src = 'assets/image/framework.png';
    };
    
    // Clear and add image
    videoDisplay.innerHTML = '';
    videoDisplay.appendChild(image);
    videoDisplay.classList.remove('playing');
    
    console.log('Showing dataset image:', title, imageSrc);
}

// Show video function
function showVideo(videoSrc, title) {
    const videoDisplay = document.getElementById('videoDisplay');
    if (!videoDisplay) return;
    
    // Create video element
    const video = document.createElement('video');
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.controls = true;
    video.loading = 'lazy';
    video.preload = 'metadata';
    
    // Handle video loading error
    video.onerror = () => {
        console.error('Video failed to load:', videoSrc);
        videoDisplay.innerHTML = `
            <div class="demo-placeholder">
                <div class="icon">⚠️</div>
                <p>Video not available</p>
                <small>${title}</small>
            </div>
        `;
    };
    
    // Clear and add video
    videoDisplay.innerHTML = '';
    videoDisplay.appendChild(video);
    videoDisplay.classList.add('playing');
    
    // Smooth scroll to center the video after it's displayed
    // Use a shorter delay for immediate response
    setTimeout(() => {
        scrollToVideo();
    }, 100);
    
    console.log('Showing video:', title, videoSrc);
}

// Smooth scroll to center the demo video in the viewport
function scrollToVideo() {
    // Find the actual video display area
    const videoDisplay = document.getElementById('videoDisplay');
    if (!videoDisplay) return;
    
    // Small delay to ensure video is rendered
    setTimeout(() => {
        // Use the most effective method - scrollIntoView with center positioning
        videoDisplay.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 50);
}

// Smooth scroll to center the dataset selection area
function scrollToDatasetSelection() {
    // Find the dataset selection area
    const datasetSection = document.querySelector('.dataset-section');
    if (!datasetSection) return;
    
    // Small delay to ensure content is rendered
    setTimeout(() => {
        // Scroll to center the dataset selection area
        datasetSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 50);
}

// Update breadcrumb navigation with clickable functionality
// Legacy function redirects to new integrated breadcrumb system
function updateBreadcrumb() {
    updateIntegratedBreadcrumb();
}

// Navigate back from breadcrumb click (dataset -> task navigation)
function navigateFromBreadcrumb(level) {
    if (level === 'dataset') {
        // Go back to dataset selection (clear task)
        currentNavigation.taskIndex = null;
        
        // Clear task selection
        document.querySelectorAll('.task-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Show dataset image if available
        if (currentNavigation.datasetIndex !== null) {
            const dataset = demoData.datasets[currentNavigation.datasetIndex];
            if (dataset && dataset.thumbnail) {
                showDatasetImage(dataset.thumbnail, dataset.name);
            }
        }
        
        // Scroll to center the dataset selection area
        scrollToDatasetSelection();
    }
    
    updateIntegratedBreadcrumb();
}

// Reset navigation
function resetNavigation() {
    currentNavigation = {
        datasetIndex: null,
        taskIndex: null
    };
    
    // Reset breadcrumb navigation
    const breadcrumbPath = document.getElementById('breadcrumbPath');
    
    if (breadcrumbPath) {
        breadcrumbPath.innerHTML = 'Select dataset and task to begin';
    }
    
    // Reset selections
    document.querySelectorAll('.dataset-card, .task-card').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Reset video display
    const videoDisplay = document.getElementById('videoDisplay');
    if (videoDisplay) {
        videoDisplay.innerHTML = `
            <div class="demo-placeholder">
                <div class="icon">🎬</div>
                <p>Select dataset and task to begin</p>
            </div>
        `;
        videoDisplay.classList.remove('playing');
    }
    
    updateIntegratedBreadcrumb();
}

// Reset demo
function resetDemo() {
    resetNavigation();
    datasetSliderOffset = 0;
    taskSliderOffset = 0;
    
    const datasetTrack = document.getElementById('datasetTrack');
    const taskTrack = document.getElementById('taskTrack');
    
    if (datasetTrack) {
        datasetTrack.style.transform = 'translateX(0)';
    }
    if (taskTrack) {
        taskTrack.style.transform = 'translateX(0)';
    }
    
    updateDatasetSliderControls();
    updateTaskSliderControls();
    
    // Scroll to center the dataset selection area
    scrollToDatasetSelection();
}

// Add trackpad scrolling support to slider (simplified for dataset/task structure)
function initTrackpadScrolling() {
    // Trackpad scrolling for dataset slider
    const datasetViewport = document.querySelector('.dataset-section .slider-viewport');
    if (datasetViewport) {
        datasetViewport.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                const direction = e.deltaX > 0 ? 'right' : 'left';
                slideDatasets(direction);
            }
        }, { passive: false });
    }
    
    // Trackpad scrolling for task slider
    const taskViewport = document.querySelector('.task-section .slider-viewport');
    if (taskViewport) {
        taskViewport.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                const direction = e.deltaX > 0 ? 'right' : 'left';
                slideTasks(direction);
            }
        }, { passive: false });
    }
}

// Initialize background video
function initBackgroundVideo() {
    const backgroundVideo = document.querySelector('.background-video');
    if (backgroundVideo) {
        // Ensure video plays on iOS and other restrictive browsers
        backgroundVideo.addEventListener('canplaythrough', () => {
            backgroundVideo.play().catch(e => {
                console.log('Background video autoplay failed:', e);
                // Show fallback background if video fails
                backgroundVideo.style.display = 'none';
            });
        });
        
        // Handle video loading errors
        backgroundVideo.addEventListener('error', () => {
            console.log('Background video failed to load');
            backgroundVideo.style.display = 'none';
        });
        
        // Force play attempt after a short delay
        setTimeout(() => {
            if (backgroundVideo.paused) {
                backgroundVideo.play().catch(e => {
                    console.log('Delayed background video play failed:', e);
                });
            }
        }, 1000);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initDemo();
        initTrackpadScrolling();
        initVideoLazyLoading(); // Initialize video lazy loading
        initImageLazyLoading(); // Initialize image lazy loading
        initBackgroundVideo(); // Initialize background video
    }, 100);
    
    // Handle window resize for sliders
    window.addEventListener('resize', () => {
        datasetSliderOffset = 0;
        taskSliderOffset = 0;
        
        const datasetTrack = document.getElementById('datasetTrack');
        const taskTrack = document.getElementById('taskTrack');
        
        if (datasetTrack) {
            datasetTrack.style.transform = 'translateX(0)';
        }
        if (taskTrack) {
            taskTrack.style.transform = 'translateX(0)';
        }
        
        updateDatasetSliderControls();
        updateTaskSliderControls();
    });
});

// BibTeX copy functionality
function copyBibTeX(contentId) {
    const bibtexContent = document.getElementById(contentId);
    const text = bibtexContent.textContent;
    
    // Find the corresponding copy button
    const copyBtn = bibtexContent.parentElement.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#1d1d1f';
        copyBtn.style.color = '#ffffff';
        copyBtn.style.borderColor = '#1d1d1f';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
            copyBtn.style.color = '';
            copyBtn.style.borderColor = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Modern fallback - try using the legacy API if clipboard API fails
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            
            // Use legacy API with warning suppression
            const success = document.execCommand('copy'); // Legacy API for older browsers
            document.body.removeChild(textArea);
            
            if (success) {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = '#1d1d1f';
                copyBtn.style.color = '#ffffff';
                copyBtn.style.borderColor = '#1d1d1f';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                    copyBtn.style.borderColor = '';
                }, 2000);
            } else {
                throw new Error('Copy command failed');
            }
        } catch (fallbackErr) {
            console.error('All copy methods failed:', fallbackErr);
            // Show error to user
            copyBtn.textContent = 'Copy failed';
            copyBtn.style.background = '#86868b';
            copyBtn.style.color = '#ffffff';
            copyBtn.style.borderColor = '#86868b';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.style.background = '';
                copyBtn.style.color = '';
                copyBtn.style.borderColor = '';
            }, 2000);
        }
    });
}
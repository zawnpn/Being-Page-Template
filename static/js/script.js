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
    datasets: {
        dataset1: {
            name: "Household",
            description: "Daily household activities and tasks",
            thumbnail: "assets/image/dataset/scene_1.jpg"
        },
        dataset2: {
            name: "Work Tasks",
            description: "Professional and office activities",
            thumbnail: "assets/image/dataset/scene_1.jpg"
        },
        dataset3: {
            name: "Outdoor Activities",
            description: "Garden and outdoor maintenance",
            thumbnail: "assets/image/dataset/scene_1.jpg"
        },
        dataset4: {
            name: "Health & Fitness",
            description: "Exercise and wellness activities",
            thumbnail: "assets/image/dataset/scene_1.jpg"
        },
        dataset5: {
            name: "Learning Tasks",
            description: "Study and research activities",
            thumbnail: "assets/image/dataset/scene_1.jpg"
        }
    },
    
    tasks: {
        kitchen_cooking: {
            name: "Kitchen Cooking",
            video: "assets/video/task/task1.mp4",
            description: "Cooking activities in the kitchen",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        kitchen_cleaning: {
            name: "Kitchen Cleaning", 
            video: "assets/video/task/task1.mp4",
            description: "Cleaning activities in the kitchen",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        bathroom_hygiene: {
            name: "Bathroom Hygiene",
            video: "assets/video/task/task1.mp4",
            description: "Personal hygiene activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        living_room: {
            name: "Living Room",
            video: "assets/video/task/task1.mp4",
            description: "Living room activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        computer_typing: {
            name: "Computer Typing",
            video: "assets/video/task/task1.mp4",
            description: "Computer typing activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        computer_navigation: {
            name: "Computer Navigation",
            video: "assets/video/task/task1.mp4",
            description: "Computer navigation activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        desk_organization: {
            name: "Desk Organization",
            video: "assets/video/task/task1.mp4",
            description: "Desk organization activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        garden_care: {
            name: "Garden Care",
            video: "assets/video/task/task1.mp4",
            description: "Garden care activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        exercise_cardio: {
            name: "Exercise - Cardio",
            video: "assets/video/task/task1.mp4",
            description: "Cardio exercise activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        },
        study_reading: {
            name: "Study - Reading",
            video: "assets/video/task/task1.mp4",
            description: "Study and reading activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg"
        }
    }
};

// Demo State Management - Dataset -> Task interaction
let currentNavigation = {
    dataset: null,
    task: null
};

let datasetSliderOffset = 0;
let taskSliderOffset = 0;
const sliderStep = 250; // pixels per slide (adjusted for larger cards)

// Initialize the demo
function initDemo() {
    console.log('Initializing dataset -> task interactive demo');
    renderDatasets();
    renderTasks();
    resetNavigation();
    
    // Auto-select first dataset
    const firstDatasetKey = Object.keys(demoData.datasets)[0];
    if (firstDatasetKey) {
        selectDataset(firstDatasetKey);
    }
    
    console.log('Demo initialized with', Object.keys(demoData.datasets).length, 'datasets and', Object.keys(demoData.tasks).length, 'tasks');
}

// Render datasets in slider
function renderDatasets() {
    const datasetTrack = document.getElementById('datasetTrack');
    if (!datasetTrack) return;
    
    datasetTrack.innerHTML = '';
    
    Object.keys(demoData.datasets).forEach(datasetKey => {
        const dataset = demoData.datasets[datasetKey];
        const card = document.createElement('div');
        card.className = 'dataset-card';
        card.onclick = () => selectDataset(datasetKey);
        
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

// Render tasks in slider
function renderTasks() {
    const taskTrack = document.getElementById('taskTrack');
    if (!taskTrack) return;
    
    taskTrack.innerHTML = '';
    
    Object.keys(demoData.tasks).forEach(taskKey => {
        const task = demoData.tasks[taskKey];
        const card = document.createElement('div');
        card.className = 'task-card';
        card.onclick = () => selectTask(taskKey);
        
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
function selectDataset(datasetKey) {
    currentNavigation.dataset = datasetKey;
    currentNavigation.task = null;
    
    // Update visual selection
    document.querySelectorAll('.dataset-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Find the clicked dataset card and add selected class
    const datasetCards = document.querySelectorAll('.dataset-card');
    datasetCards.forEach(card => {
        const cardText = card.querySelector('.dataset-text-overlay');
        if (cardText && cardText.textContent === demoData.datasets[datasetKey].name) {
            card.classList.add('selected');
        }
    });
    
    // Show dataset image in video area
    const dataset = demoData.datasets[datasetKey];
    if (dataset && dataset.thumbnail) {
        showDatasetImage(dataset.thumbnail, dataset.name);
    }
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    
    console.log('Selected dataset:', datasetKey);
}

// Select task
function selectTask(taskKey) {
    currentNavigation.task = taskKey;
    
    // Update visual selection
    document.querySelectorAll('.task-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Find the clicked task card and add selected class
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        const cardText = card.querySelector('.task-name');
        if (cardText && cardText.textContent === demoData.tasks[taskKey].name) {
            card.classList.add('selected');
        }
    });
    
    // Directly play the task video
    const task = demoData.tasks[taskKey];
    if (task && task.video) {
        showVideo(task.video, task.name);
    }
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    
    console.log('Selected task:', taskKey);
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
    
    if (currentNavigation.dataset) {
        const dataset = demoData.datasets[currentNavigation.dataset];
        pathItems.push(`<span class="breadcrumb-item clickable" onclick="navigateFromBreadcrumb('dataset')">${dataset.name}</span>`);
        
        // Add task if selected
        if (currentNavigation.task) {
            const task = demoData.tasks[currentNavigation.task];
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
function selectVideo(videoKey) {
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
        currentNavigation.task = null;
        
        // Clear task selection
        document.querySelectorAll('.task-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Show dataset image if available
        const dataset = demoData.datasets[currentNavigation.dataset];
        if (dataset && dataset.thumbnail) {
            showDatasetImage(dataset.thumbnail, dataset.name);
        }
        
        // Scroll to center the dataset selection area
        scrollToDatasetSelection();
    }
    
    updateIntegratedBreadcrumb();
}

// Reset navigation
function resetNavigation() {
    currentNavigation = {
        dataset: null,
        task: null
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

// Add trackpad scrolling support to slider
function initTrackpadScrolling() {
    const viewport = document.querySelector('.slider-viewport');
    if (!viewport) return;
    
    let isScrolling = false;
    let scrollTimeout;
    
    viewport.addEventListener('wheel', (e) => {
        // Only handle horizontal scrolling or when no vertical scroll
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.deltaY === 0) {
            // Prevent default page scroll only when handling horizontal scrolling
            e.preventDefault();
            const track = document.getElementById('scenarioTrack');
            if (!track) return;
            
            const viewportWidth = viewport.offsetWidth;
            const trackWidth = track.scrollWidth;
            const maxOffset = Math.max(0, trackWidth - viewportWidth);
            
            // Adjust scroll sensitivity
            const scrollAmount = e.deltaX * 2; // Multiply for better sensitivity
            
            // Update slider offset
            sliderOffset = Math.max(0, Math.min(maxOffset, sliderOffset + scrollAmount));
            
            // Apply transform
            track.style.transform = `translateX(-${sliderOffset}px)`;
            
            // Update controls
            updateSliderControls();
            
            // Set scrolling state
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 150);
        }
    }, { passive: false });
    
    // Add visual feedback for scrolling
    viewport.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.deltaY === 0) {
            viewport.style.cursor = 'grabbing';
            setTimeout(() => {
                if (!isScrolling) {
                    viewport.style.cursor = 'grab';
                }
            }, 150);
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initDemo();
        initTrackpadScrolling();
        initVideoLazyLoading(); // Initialize video lazy loading
        initImageLazyLoading(); // Initialize image lazy loading
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
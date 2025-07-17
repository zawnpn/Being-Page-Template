// Theme system removed - light theme only


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
    maxCategoryLevels: 1, // Maximum depth of category navigation (configurable)
    
    scenarios: {
        home_activities: {
            name: "Home Activities",
            description: "Daily household tasks and activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                kitchen_cooking: {
                    name: "Kitchen Cooking",
                    videos: {
                        prep_ingredients: { 
                            name: "Prep ingredients", 
                            description: "Prepare cooking ingredients", 
                            video: "assets/video/demo1.mp4" 
                        },
                        use_stove: { 
                            name: "Use stove", 
                            description: "Cook on stovetop", 
                            video: "assets/video/demo1.mp4" 
                        },
                        season_food: { 
                            name: "Season food", 
                            description: "Add spices and seasonings", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                kitchen_cleaning: {
                    name: "Kitchen Cleaning",
                    videos: {
                        wash_dishes: { 
                            name: "Wash dishes", 
                            description: "Clean kitchen utensils", 
                            video: "assets/video/demo1.mp4" 
                        },
                        wipe_counter: { 
                            name: "Wipe counter", 
                            description: "Clean kitchen surfaces", 
                            video: "assets/video/demo1.mp4" 
                        },
                        organize_items: { 
                            name: "Organize items", 
                            description: "Arrange kitchen tools", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                bathroom_hygiene: {
                    name: "Bathroom Hygiene",
                    videos: {
                        brush_teeth: { 
                            name: "Brush teeth", 
                            description: "Clean teeth with toothbrush", 
                            video: "assets/video/demo1.mp4" 
                        },
                        wash_face: { 
                            name: "Wash face", 
                            description: "Clean face with water", 
                            video: "assets/video/demo1.mp4" 
                        },
                        apply_skincare: { 
                            name: "Apply skincare", 
                            description: "Use facial care products", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                living_room: {
                    name: "Living Room",
                    videos: {
                        watch_tv: { 
                            name: "Watch TV", 
                            description: "Use television for entertainment", 
                            video: "assets/video/demo1.mp4" 
                        },
                        read_book: { 
                            name: "Read book", 
                            description: "Read for leisure", 
                            video: "assets/video/demo1.mp4" 
                        },
                        adjust_lighting: { 
                            name: "Adjust lighting", 
                            description: "Control room brightness", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        },
        work_activities: {
            name: "Work Activities",
            description: "Professional and productivity tasks",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                computer_typing: {
                    name: "Computer Typing",
                    videos: {
                        type_document: { 
                            name: "Type document", 
                            description: "Create text content", 
                            video: "assets/video/demo1.mp4" 
                        },
                        use_shortcuts: { 
                            name: "Use shortcuts", 
                            description: "Utilize keyboard shortcuts", 
                            video: "assets/video/demo1.mp4" 
                        },
                        correct_text: { 
                            name: "Correct text", 
                            description: "Edit and revise content", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                computer_navigation: {
                    name: "Computer Navigation",
                    videos: {
                        browse_files: { 
                            name: "Browse files", 
                            description: "Navigate file system", 
                            video: "assets/video/demo1.mp4" 
                        },
                        switch_applications: { 
                            name: "Switch applications", 
                            description: "Change between programs", 
                            video: "assets/video/demo1.mp4" 
                        },
                        scroll_content: { 
                            name: "Scroll content", 
                            description: "Navigate through documents", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                desk_organization: {
                    name: "Desk Organization",
                    videos: {
                        use_pen: { 
                            name: "Use pen", 
                            description: "Write with pen", 
                            video: "assets/video/demo1.mp4" 
                        },
                        organize_papers: { 
                            name: "Organize papers", 
                            description: "Arrange documents", 
                            video: "assets/video/demo1.mp4" 
                        },
                        adjust_chair: { 
                            name: "Adjust chair", 
                            description: "Set comfortable seating", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        },
        outdoor_activities: {
            name: "Outdoor Activities",
            description: "Garden and outdoor maintenance tasks",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                garden_care: {
                    name: "Garden Care",
                    videos: {
                        water_plants: { 
                            name: "Water plants", 
                            description: "Irrigate garden plants", 
                            video: "assets/video/demo1.mp4" 
                        },
                        prune_branches: { 
                            name: "Prune branches", 
                            description: "Trim plant growth", 
                            video: "assets/video/demo1.mp4" 
                        },
                        apply_fertilizer: { 
                            name: "Apply fertilizer", 
                            description: "Nourish plants", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                garden_tools: {
                    name: "Garden Tools",
                    videos: {
                        use_rake: { 
                            name: "Use rake", 
                            description: "Clear leaves and debris", 
                            video: "assets/video/demo1.mp4" 
                        },
                        operate_hose: { 
                            name: "Operate hose", 
                            description: "Water with garden hose", 
                            video: "assets/video/demo1.mp4" 
                        },
                        handle_shovel: { 
                            name: "Handle shovel", 
                            description: "Dig and move soil", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                outdoor_maintenance: {
                    name: "Outdoor Maintenance",
                    videos: {
                        remove_weeds: { 
                            name: "Remove weeds", 
                            description: "Clear unwanted plants", 
                            video: "assets/video/demo1.mp4" 
                        },
                        sweep_pathways: { 
                            name: "Sweep pathways", 
                            description: "Clean walkways", 
                            video: "assets/video/demo1.mp4" 
                        },
                        organize_tools: { 
                            name: "Organize tools", 
                            description: "Store garden equipment", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        },
        health_fitness: {
            name: "Health & Fitness",
            description: "Exercise, wellness, and health activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                exercise_cardio: {
                    name: "Exercise - Cardio",
                    videos: {
                        running: { 
                            name: "Running", 
                            description: "Outdoor running exercise", 
                            video: "assets/video/demo1.mp4" 
                        },
                        cycling: { 
                            name: "Cycling", 
                            description: "Bicycle exercise", 
                            video: "assets/video/demo1.mp4" 
                        },
                        jumping: { 
                            name: "Jumping jacks", 
                            description: "High-intensity jumping", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                exercise_strength: {
                    name: "Exercise - Strength",
                    videos: {
                        push_ups: { 
                            name: "Push-ups", 
                            description: "Upper body strength", 
                            video: "assets/video/demo1.mp4" 
                        },
                        squats: { 
                            name: "Squats", 
                            description: "Lower body strength", 
                            video: "assets/video/demo1.mp4" 
                        },
                        planks: { 
                            name: "Planks", 
                            description: "Core strengthening", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                wellness_meditation: {
                    name: "Wellness - Meditation",
                    videos: {
                        breathing: { 
                            name: "Breathing exercises", 
                            description: "Deep breathing techniques", 
                            video: "assets/video/demo1.mp4" 
                        },
                        mindfulness: { 
                            name: "Mindfulness", 
                            description: "Present moment awareness", 
                            video: "assets/video/demo1.mp4" 
                        },
                        relaxation: { 
                            name: "Relaxation", 
                            description: "Stress relief techniques", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        },
        education_learning: {
            name: "Education & Learning",
            description: "Study, research, and learning activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                study_reading: {
                    name: "Study - Reading",
                    videos: {
                        textbooks: { 
                            name: "Reading textbooks", 
                            description: "Academic reading", 
                            video: "assets/video/demo1.mp4" 
                        },
                        note_taking: { 
                            name: "Note taking", 
                            description: "Writing study notes", 
                            video: "assets/video/demo1.mp4" 
                        },
                        highlighting: { 
                            name: "Highlighting", 
                            description: "Marking important text", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                study_research: {
                    name: "Study - Research",
                    videos: {
                        online_search: { 
                            name: "Online research", 
                            description: "Internet information gathering", 
                            video: "assets/video/demo1.mp4" 
                        },
                        library_work: { 
                            name: "Library work", 
                            description: "Academic library research", 
                            video: "assets/video/demo1.mp4" 
                        },
                        data_analysis: { 
                            name: "Data analysis", 
                            description: "Analyzing research data", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        },
        entertainment_leisure: {
            name: "Entertainment & Leisure",
            description: "Recreation, hobbies, and leisure activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                gaming_video: {
                    name: "Gaming - Video Games",
                    videos: {
                        console_gaming: { 
                            name: "Console gaming", 
                            description: "Playing console games", 
                            video: "assets/video/demo1.mp4" 
                        },
                        pc_gaming: { 
                            name: "PC gaming", 
                            description: "Computer game playing", 
                            video: "assets/video/demo1.mp4" 
                        },
                        mobile_gaming: { 
                            name: "Mobile gaming", 
                            description: "Smartphone games", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                arts_drawing: {
                    name: "Arts - Drawing",
                    videos: {
                        sketching: { 
                            name: "Sketching", 
                            description: "Basic sketching techniques", 
                            video: "assets/video/demo1.mp4" 
                        },
                        coloring: { 
                            name: "Coloring", 
                            description: "Adding colors to artwork", 
                            video: "assets/video/demo1.mp4" 
                        },
                        digital_art: { 
                            name: "Digital art", 
                            description: "Creating digital artwork", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        },
        shopping_errands: {
            name: "Shopping & Errands",
            description: "Daily errands and shopping activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                grocery_navigation: {
                    name: "Grocery - Navigation",
                    videos: {
                        find_items: { 
                            name: "Finding items", 
                            description: "Locating products in store", 
                            video: "assets/video/demo1.mp4" 
                        },
                        cart_management: { 
                            name: "Cart management", 
                            description: "Using shopping cart", 
                            video: "assets/video/demo1.mp4" 
                        },
                        checkout: { 
                            name: "Checkout process", 
                            description: "Paying for purchases", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                banking_atm: {
                    name: "Banking - ATM",
                    videos: {
                        withdrawal: { 
                            name: "Cash withdrawal", 
                            description: "Getting cash from ATM", 
                            video: "assets/video/demo1.mp4" 
                        },
                        deposit: { 
                            name: "Making deposits", 
                            description: "Depositing money", 
                            video: "assets/video/demo1.mp4" 
                        },
                        balance_check: { 
                            name: "Balance check", 
                            description: "Checking account balance", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        },
        // EXAMPLE: To enable 3-level navigation, change maxCategoryLevels to 2 and uncomment this:
        // example_3level: {
        //     name: "Example 3-Level",
        //     description: "Demonstrates 3-level category navigation",
        //     thumbnail: "assets/image/scenarios/scene_1.png",
        //     categories: {
        //         level1_category: {
        //             name: "Level 1 Category",
        //             categories: {
        //                 level2_subcategory: {
        //                     name: "Level 2 Subcategory",
        //                     videos: {
        //                         sample_video: {
        //                             name: "Sample Video",
        //                             description: "3-level navigation example",
        //                             video: "assets/video/demo1.mp4"
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        social_activities: {
            name: "Social Activities",
            description: "Interactions and social engagement",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                communication_phone: {
                    name: "Communication - Phone",
                    videos: {
                        making_calls: { 
                            name: "Making calls", 
                            description: "Initiating phone calls", 
                            video: "assets/video/demo1.mp4" 
                        },
                        answering_calls: { 
                            name: "Answering calls", 
                            description: "Receiving phone calls", 
                            video: "assets/video/demo1.mp4" 
                        },
                        video_calls: { 
                            name: "Video calls", 
                            description: "Video conferencing", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                },
                social_posting: {
                    name: "Social - Posting",
                    videos: {
                        photo_sharing: { 
                            name: "Photo sharing", 
                            description: "Sharing photos online", 
                            video: "assets/video/demo1.mp4" 
                        },
                        status_updates: { 
                            name: "Status updates", 
                            description: "Posting status messages", 
                            video: "assets/video/demo1.mp4" 
                        },
                        commenting: { 
                            name: "Commenting", 
                            description: "Engaging with posts", 
                            video: "assets/video/demo1.mp4" 
                        }
                    }
                }
            }
        }
    }
};

// Hierarchical Demo State Management - Dynamic based on maxCategoryLevels
let currentNavigation = {
    scenario: null,
    categories: [], // Dynamic array to handle n-level categories
    selectedVideo: null
};

let sliderOffset = 0;
const sliderStep = 220; // pixels per slide (adjusted for larger cards)

// Initialize the demo
function initDemo() {
    console.log('Initializing hierarchical interactive demo');
    renderScenarios();
    resetNavigation();
    console.log('Demo initialized with', Object.keys(demoData.scenarios).length, 'scenarios');
}

// Render scenarios in slider
function renderScenarios() {
    const scenarioTrack = document.getElementById('scenarioTrack');
    if (!scenarioTrack) return;
    
    scenarioTrack.innerHTML = '';
    
    Object.keys(demoData.scenarios).forEach(scenarioKey => {
        const scenario = demoData.scenarios[scenarioKey];
        const card = document.createElement('div');
        card.className = 'scenario-card';
        card.onclick = () => selectScenario(scenarioKey);
        
        card.innerHTML = `
            <div class="scenario-image">
                <img src="${scenario.thumbnail}" alt="${scenario.name}" onerror="this.src='assets/image/framework.png'">
            </div>
            <div class="scenario-name">${scenario.name}</div>
        `;
        
        scenarioTrack.appendChild(card);
    });
    
    updateSliderControls();
}

// Slider controls
function slideScenarios(direction) {
    const viewport = document.querySelector('.slider-viewport');
    const track = document.getElementById('scenarioTrack');
    if (!viewport || !track) return;
    
    const viewportWidth = viewport.offsetWidth;
    const trackWidth = track.scrollWidth;
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    
    if (direction === 'left') {
        sliderOffset = Math.max(0, sliderOffset - sliderStep);
    } else {
        sliderOffset = Math.min(maxOffset, sliderOffset + sliderStep);
    }
    
    track.style.transform = `translateX(-${sliderOffset}px)`;
    updateSliderControls();
}

function updateSliderControls() {
    const leftBtn = document.getElementById('scenarioSliderLeft');
    const rightBtn = document.getElementById('scenarioSliderRight');
    const viewport = document.querySelector('.slider-viewport');
    const track = document.getElementById('scenarioTrack');
    
    if (!leftBtn || !rightBtn || !viewport || !track) return;
    
    const viewportWidth = viewport.offsetWidth;
    const trackWidth = track.scrollWidth;
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    
    // Show/hide buttons based on need and current position
    if (trackWidth > viewportWidth) {
        leftBtn.style.display = sliderOffset > 0 ? 'flex' : 'none';
        rightBtn.style.display = sliderOffset < maxOffset ? 'flex' : 'none';
    } else {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    }
    
    // Update button states
    leftBtn.disabled = sliderOffset <= 0;
    rightBtn.disabled = sliderOffset >= maxOffset;
}

// Select scenario
function selectScenario(scenarioKey) {
    currentNavigation.scenario = scenarioKey;
    currentNavigation.categories = [];
    currentNavigation.selectedVideo = null;
    
    // Update visual selection
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.classList.remove('selected');
    });
    // Fix deprecated event usage
    const scenarioCard = document.querySelector(`.scenario-card[onclick*="${scenarioKey}"]`);
    if (scenarioCard) {
        scenarioCard.classList.add('selected');
    }
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    
    console.log('Selected scenario:', scenarioKey);
}

// Update integrated breadcrumb navigation
function updateIntegratedBreadcrumb() {
    const breadcrumbNav = document.getElementById('breadcrumbNav');
    const breadcrumbPath = document.getElementById('breadcrumbPath');
    const breadcrumbOptions = document.getElementById('breadcrumbOptions');
    
    if (!breadcrumbNav || !breadcrumbPath || !breadcrumbOptions) return;
    
    // Build and display current path
    const pathItems = buildBreadcrumbPath();
    breadcrumbPath.innerHTML = pathItems.length > 0 ? pathItems.join(' › ') : 'Select a scenario to continue';
    
    // Check if video is selected - if so, collapse the breadcrumb area
    if (currentNavigation.selectedVideo) {
        // Hide options section and make breadcrumb compact
        breadcrumbOptions.style.display = 'none';
        breadcrumbNav.classList.add('collapsed');
    } else {
        // Show options section and expand breadcrumb area
        breadcrumbOptions.style.display = 'block';
        breadcrumbNav.classList.remove('collapsed');
        
        // Build and display available options
        const optionButtons = buildBreadcrumbOptions();
        breadcrumbOptions.innerHTML = optionButtons;
    }
    
    // Show breadcrumb navigation
    breadcrumbNav.style.display = 'block';
}

// Select category at specific level (modular)
function selectCategory(categoryKey, level) {
    // Truncate categories array to current level
    currentNavigation.categories = currentNavigation.categories.slice(0, level);
    // Set category at current level
    currentNavigation.categories[level] = categoryKey;
    // Clear video selection
    currentNavigation.selectedVideo = null;
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    console.log(`Selected category level ${level}:`, categoryKey);
}

// Backwards compatibility wrapper
function selectCategory1(categoryKey) {
    selectCategory(categoryKey, 0);
}

// Build breadcrumb path display (modular for n-levels)
function buildBreadcrumbPath() {
    const pathItems = [];
    
    if (currentNavigation.scenario) {
        const scenario = demoData.scenarios[currentNavigation.scenario];
        pathItems.push(`<span class="breadcrumb-item clickable" onclick="navigateFromBreadcrumb('scenario')">${scenario.name}</span>`);
        
        // Navigate through categories dynamically
        let currentData = scenario;
        for (let i = 0; i < currentNavigation.categories.length; i++) {
            const categoryKey = currentNavigation.categories[i];
            if (currentData.categories && currentData.categories[categoryKey]) {
                const category = currentData.categories[categoryKey];
                const isClickable = currentNavigation.selectedVideo || i < currentNavigation.categories.length - 1;
                const clickHandler = isClickable ? ` onclick="navigateFromBreadcrumb('category', ${i})"` : '';
                const classes = isClickable ? 'breadcrumb-item clickable' : 'breadcrumb-item current';
                pathItems.push(`<span class="${classes}"${clickHandler}>${category.name}</span>`);
                
                // Move to next level
                currentData = category;
            }
        }
        
        // Add video if selected
        if (currentNavigation.selectedVideo && currentData.videos) {
            const video = currentData.videos[currentNavigation.selectedVideo];
            if (video) {
                pathItems.push(`<span class="breadcrumb-item current">${video.name}</span>`);
            }
        }
    }
    
    return pathItems;
}


// Build breadcrumb options display (modular for n-levels)
function buildBreadcrumbOptions() {
    if (!currentNavigation.scenario) {
        return '<span class="breadcrumb-hint">Select a scenario above to continue</span>';
    }
    
    const scenario = demoData.scenarios[currentNavigation.scenario];
    
    // Navigate to current level data
    let currentData = scenario;
    for (let i = 0; i < currentNavigation.categories.length; i++) {
        const categoryKey = currentNavigation.categories[i];
        if (currentData.categories && currentData.categories[categoryKey]) {
            currentData = currentData.categories[categoryKey];
        }
    }
    
    // If we haven't reached max depth and there are more categories
    if (currentNavigation.categories.length < demoData.maxCategoryLevels && currentData.categories) {
        const currentLevel = currentNavigation.categories.length;
        const options = Object.keys(currentData.categories).map(categoryKey => {
            const category = currentData.categories[categoryKey];
            return `<button class="breadcrumb-option" onclick="selectCategory('${categoryKey}', ${currentLevel})">${category.name}</button>`;
        }).join('');
        return `<div class="breadcrumb-options-container">${options}</div>`;
    }
    
    // Show video options if we're at max depth or no more categories
    if (currentData.videos && !currentNavigation.selectedVideo) {
        const options = Object.keys(currentData.videos).map(videoKey => {
            const video = currentData.videos[videoKey];
            return `<button class="breadcrumb-option" onclick="selectVideo('${videoKey}')">${video.name}</button>`;
        }).join('');
        return `<div class="breadcrumb-options-container">${options}</div>`;
    }
    
    return '';
}

// Select video (modular for n-levels)
function selectVideo(videoKey) {
    currentNavigation.selectedVideo = videoKey;
    
    // Navigate to current level data to get videos
    const scenario = demoData.scenarios[currentNavigation.scenario];
    let currentData = scenario;
    
    // Navigate through categories to find videos
    for (let i = 0; i < currentNavigation.categories.length; i++) {
        const categoryKey = currentNavigation.categories[i];
        if (currentData.categories && currentData.categories[categoryKey]) {
            currentData = currentData.categories[categoryKey];
        }
    }
    
    if (currentData.videos && currentData.videos[videoKey]) {
        const video = currentData.videos[videoKey];
        showVideo(video.video, video.name);
        updateIntegratedBreadcrumb();
        
        console.log('Selected video:', videoKey);
    } else {
        console.error('Video not found:', videoKey);
    }
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
    
    console.log('Showing video:', title, videoSrc);
}

// Update breadcrumb navigation with clickable functionality
// Legacy function redirects to new integrated breadcrumb system
function updateBreadcrumb() {
    updateIntegratedBreadcrumb();
}

// Navigate back from breadcrumb click (modular for n-levels)
function navigateFromBreadcrumb(level, categoryIndex = null) {
    if (level === 'scenario') {
        // Go back to scenario selection (clear all categories)
        currentNavigation.categories = [];
        currentNavigation.selectedVideo = null;
    } else if (level === 'category' && categoryIndex !== null) {
        // Go back to specific category level
        currentNavigation.categories = currentNavigation.categories.slice(0, categoryIndex + 1);
        currentNavigation.selectedVideo = null;
    }
    
    // Update visual selections
    document.querySelectorAll('.category-btn, .video-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Hide video if we're navigating back
    if (level !== 'video') {
        const videoDisplay = document.getElementById('videoDisplay');
        if (videoDisplay) {
            videoDisplay.innerHTML = `
                <div class="demo-placeholder">
                    <div class="icon">🎬</div>
                    <p>Make your selection to view video</p>
                </div>
            `;
            videoDisplay.classList.remove('playing');
        }
    }
    
    updateIntegratedBreadcrumb();
}

// Reset navigation (modular)
function resetNavigation() {
    currentNavigation = {
        scenario: null,
        categories: [],
        selectedVideo: null
    };
    
    // Reset breadcrumb navigation
    const breadcrumbPath = document.getElementById('breadcrumbPath');
    const breadcrumbOptions = document.getElementById('breadcrumbOptions');
    
    if (breadcrumbPath) {
        breadcrumbPath.innerHTML = 'Select a scenario to continue';
    }
    
    if (breadcrumbOptions) {
        breadcrumbOptions.innerHTML = '';
    }
    
    // Reset selections
    document.querySelectorAll('.scenario-card, .breadcrumb-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Reset video display
    const videoDisplay = document.getElementById('videoDisplay');
    if (videoDisplay) {
        videoDisplay.innerHTML = `
            <div class="demo-placeholder">
                <div class="icon">🎬</div>
                <p>Select a scenario to begin</p>
            </div>
        `;
        videoDisplay.classList.remove('playing');
    }
    
    updateIntegratedBreadcrumb();
}

// Reset demo
function resetDemo() {
    resetNavigation();
    sliderOffset = 0;
    const track = document.getElementById('scenarioTrack');
    if (track) {
        track.style.transform = 'translateX(0)';
    }
    updateSliderControls();
    console.log('Demo reset');
}

// Add trackpad scrolling support to slider
function initTrackpadScrolling() {
    const viewport = document.querySelector('.slider-viewport');
    if (!viewport) return;
    
    let isScrolling = false;
    let scrollTimeout;
    
    viewport.addEventListener('wheel', (e) => {
        // Prevent default page scroll
        e.preventDefault();
        
        // Only handle horizontal scrolling or when no vertical scroll
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.deltaY === 0) {
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
    }, 100);
    
    // Handle window resize for slider
    window.addEventListener('resize', () => {
        sliderOffset = 0;
        const track = document.getElementById('scenarioTrack');
        if (track) {
            track.style.transform = 'translateX(0)';
        }
        updateSliderControls();
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
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
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
                copyBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            } else {
                throw new Error('Copy command failed');
            }
        } catch (fallbackErr) {
            console.error('All copy methods failed:', fallbackErr);
            // Show error to user
            copyBtn.textContent = 'Copy failed';
            copyBtn.style.background = '#dc3545';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.style.background = '';
            }, 2000);
        }
    });
}
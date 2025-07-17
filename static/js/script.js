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
const demoData = {
    maxCategoryLevels: 2, // Maximum depth of category navigation
    
    scenarios: {
        home_activities: {
            name: "Home Activities",
            description: "Daily household tasks and activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                kitchen: {
                    name: "Kitchen",
                    categories: {
                        cooking: {
                            name: "Cooking",
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
                        cleaning: {
                            name: "Cleaning",
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
                        }
                    }
                },
                bathroom: {
                    name: "Bathroom",
                    categories: {
                        hygiene: {
                            name: "Personal Hygiene",
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
                        grooming: {
                            name: "Grooming",
                            videos: {
                                comb_hair: { 
                                    name: "Comb hair", 
                                    description: "Style hair with comb", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                use_mirror: { 
                                    name: "Use mirror", 
                                    description: "Check appearance in mirror", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                trim_nails: { 
                                    name: "Trim nails", 
                                    description: "Cut fingernails", 
                                    video: "assets/video/demo1.mp4" 
                                }
                            }
                        }
                    }
                },
                living_room: {
                    name: "Living Room",
                    categories: {
                        entertainment: {
                            name: "Entertainment",
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
                                listen_music: { 
                                    name: "Listen to music", 
                                    description: "Play music for relaxation", 
                                    video: "assets/video/demo1.mp4" 
                                }
                            }
                        },
                        comfort: {
                            name: "Comfort",
                            videos: {
                                adjust_lighting: { 
                                    name: "Adjust lighting", 
                                    description: "Control room brightness", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                arrange_pillows: { 
                                    name: "Arrange pillows", 
                                    description: "Position cushions comfortably", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                control_temperature: { 
                                    name: "Control temperature", 
                                    description: "Adjust room climate", 
                                    video: "assets/video/demo1.mp4" 
                                }
                            }
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
                computer_work: {
                    name: "Computer Work",
                    categories: {
                        typing: {
                            name: "Typing & Input",
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
                        navigation: {
                            name: "Navigation",
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
                        }
                    }
                },
                desk_organization: {
                    name: "Desk Organization",
                    categories: {
                        tools: {
                            name: "Tools & Supplies",
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
                                access_drawer: { 
                                    name: "Access drawer", 
                                    description: "Open storage compartment", 
                                    video: "assets/video/demo1.mp4" 
                                }
                            }
                        },
                        workspace: {
                            name: "Workspace Setup",
                            videos: {
                                adjust_chair: { 
                                    name: "Adjust chair", 
                                    description: "Set comfortable seating", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                position_monitor: { 
                                    name: "Position monitor", 
                                    description: "Adjust screen placement", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                clean_desk: { 
                                    name: "Clean desk", 
                                    description: "Maintain tidy workspace", 
                                    video: "assets/video/demo1.mp4" 
                                }
                            }
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
                gardening: {
                    name: "Gardening",
                    categories: {
                        plant_care: {
                            name: "Plant Care",
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
                        harvesting: {
                            name: "Harvesting",
                            videos: {
                                pick_flowers: { 
                                    name: "Pick flowers", 
                                    description: "Harvest blooms", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                collect_vegetables: { 
                                    name: "Collect vegetables", 
                                    description: "Gather garden produce", 
                                    video: "assets/video/demo1.mp4" 
                                },
                                gather_seeds: { 
                                    name: "Gather seeds", 
                                    description: "Collect for replanting", 
                                    video: "assets/video/demo1.mp4" 
                                }
                            }
                        }
                    }
                },
                maintenance: {
                    name: "Maintenance",
                    categories: {
                        tools: {
                            name: "Tool Usage",
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
                        cleanup: {
                            name: "Cleanup",
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
                }
            }
        }
    }
};

// Hierarchical Demo State Management
let currentNavigation = {
    scenario: null,
    category1: null,
    category2: null,
    selectedVideo: null
};

let sliderOffset = 0;
const sliderStep = 200; // pixels per slide

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
    const maxOffset = trackWidth - viewportWidth;
    
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
    const maxOffset = trackWidth - viewportWidth;
    
    // Show/hide buttons based on need
    if (trackWidth > viewportWidth) {
        leftBtn.style.display = sliderOffset > 0 ? 'flex' : 'none';
        rightBtn.style.display = sliderOffset < maxOffset ? 'flex' : 'none';
    } else {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    }
}

// Select scenario
function selectScenario(scenarioKey) {
    currentNavigation.scenario = scenarioKey;
    currentNavigation.category1 = null;
    currentNavigation.category2 = null;
    currentNavigation.selectedVideo = null;
    
    // Update visual selection
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.scenario-card').classList.add('selected');
    
    // Show first category level
    showCategoryLevel1();
    hideVideoLevel();
    hideCategoryLevel2();
    updateBreadcrumb();
    
    console.log('Selected scenario:', scenarioKey);
}

// Show category level 1
function showCategoryLevel1() {
    const level = document.getElementById('categoryLevel1');
    const buttons = document.getElementById('categoryButtons1');
    
    if (!level || !buttons || !currentNavigation.scenario) return;
    
    const scenario = demoData.scenarios[currentNavigation.scenario];
    buttons.innerHTML = '';
    
    Object.keys(scenario.categories).forEach(categoryKey => {
        const category = scenario.categories[categoryKey];
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = category.name;
        btn.onclick = () => selectCategory1(categoryKey);
        
        buttons.appendChild(btn);
    });
    
    level.style.display = 'block';
}

// Select category level 1
function selectCategory1(categoryKey) {
    currentNavigation.category1 = categoryKey;
    currentNavigation.category2 = null;
    currentNavigation.selectedVideo = null;
    
    // Update visual selection
    document.querySelectorAll('#categoryButtons1 .category-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    const scenario = demoData.scenarios[currentNavigation.scenario];
    const category = scenario.categories[categoryKey];
    
    // Check if this category has subcategories or videos
    if (category.categories) {
        showCategoryLevel2();
        hideVideoLevel();
    } else if (category.videos) {
        showVideoLevel();
        hideCategoryLevel2();
    }
    
    updateBreadcrumb();
    console.log('Selected category 1:', categoryKey);
}

// Show category level 2
function showCategoryLevel2() {
    const level = document.getElementById('categoryLevel2');
    const buttons = document.getElementById('categoryButtons2');
    
    if (!level || !buttons || !currentNavigation.scenario || !currentNavigation.category1) return;
    
    const scenario = demoData.scenarios[currentNavigation.scenario];
    const category1 = scenario.categories[currentNavigation.category1];
    buttons.innerHTML = '';
    
    if (category1.categories) {
        Object.keys(category1.categories).forEach(categoryKey => {
            const category = category1.categories[categoryKey];
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = category.name;
            btn.onclick = () => selectCategory2(categoryKey);
            
            buttons.appendChild(btn);
        });
        
        level.style.display = 'block';
    }
}

// Select category level 2
function selectCategory2(categoryKey) {
    currentNavigation.category2 = categoryKey;
    currentNavigation.selectedVideo = null;
    
    // Update visual selection
    document.querySelectorAll('#categoryButtons2 .category-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    showVideoLevel();
    updateBreadcrumb();
    console.log('Selected category 2:', categoryKey);
}

// Show video level
function showVideoLevel() {
    const level = document.getElementById('videoLevel');
    const buttons = document.getElementById('videoButtons');
    
    if (!level || !buttons || !currentNavigation.scenario || !currentNavigation.category1) return;
    
    const scenario = demoData.scenarios[currentNavigation.scenario];
    const category1 = scenario.categories[currentNavigation.category1];
    let videos = null;
    
    if (currentNavigation.category2 && category1.categories) {
        const category2 = category1.categories[currentNavigation.category2];
        videos = category2.videos;
    } else {
        videos = category1.videos;
    }
    
    if (!videos) return;
    
    buttons.innerHTML = '';
    
    Object.keys(videos).forEach(videoKey => {
        const video = videos[videoKey];
        const btn = document.createElement('button');
        btn.className = 'video-btn';
        btn.textContent = video.name;
        btn.onclick = () => selectVideo(videoKey);
        
        buttons.appendChild(btn);
    });
    
    level.style.display = 'block';
}

// Select video
function selectVideo(videoKey) {
    currentNavigation.selectedVideo = videoKey;
    
    // Update visual selection
    document.querySelectorAll('#videoButtons .video-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Get video data
    const scenario = demoData.scenarios[currentNavigation.scenario];
    const category1 = scenario.categories[currentNavigation.category1];
    let videos = null;
    
    if (currentNavigation.category2 && category1.categories) {
        const category2 = category1.categories[currentNavigation.category2];
        videos = category2.videos;
    } else {
        videos = category1.videos;
    }
    
    const video = videos[videoKey];
    showVideo(video.video, video.name);
    updateBreadcrumb();
    
    console.log('Selected video:', videoKey);
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

// Update breadcrumb navigation
function updateBreadcrumb() {
    const breadcrumbNav = document.getElementById('breadcrumbNav');
    const breadcrumbItems = document.getElementById('breadcrumbItems');
    
    if (!breadcrumbNav || !breadcrumbItems) return;
    
    const path = [];
    
    if (currentNavigation.scenario) {
        const scenario = demoData.scenarios[currentNavigation.scenario];
        path.push(scenario.name);
        
        if (currentNavigation.category1) {
            const category1 = scenario.categories[currentNavigation.category1];
            path.push(category1.name);
            
            if (currentNavigation.category2) {
                const category2 = category1.categories[currentNavigation.category2];
                path.push(category2.name);
            }
            
            if (currentNavigation.selectedVideo) {
                let videos = null;
                if (currentNavigation.category2 && category1.categories) {
                    const category2 = category1.categories[currentNavigation.category2];
                    videos = category2.videos;
                } else {
                    videos = category1.videos;
                }
                
                if (videos && videos[currentNavigation.selectedVideo]) {
                    path.push(videos[currentNavigation.selectedVideo].name);
                }
            }
        }
    }
    
    if (path.length > 0) {
        breadcrumbItems.innerHTML = path.map((item, index) => 
            `<span class="breadcrumb-item ${index === path.length - 1 ? 'current' : ''}">${item}</span>`
        ).join('');
        breadcrumbNav.style.display = 'block';
    } else {
        breadcrumbNav.style.display = 'none';
    }
}

// Hide navigation levels
function hideCategoryLevel2() {
    const level = document.getElementById('categoryLevel2');
    if (level) level.style.display = 'none';
}

function hideVideoLevel() {
    const level = document.getElementById('videoLevel');
    if (level) level.style.display = 'none';
}

// Reset navigation
function resetNavigation() {
    currentNavigation = {
        scenario: null,
        category1: null,
        category2: null,
        selectedVideo: null
    };
    
    // Hide all levels except scenario
    hideCategoryLevel2();
    hideVideoLevel();
    const categoryLevel1 = document.getElementById('categoryLevel1');
    if (categoryLevel1) categoryLevel1.style.display = 'none';
    
    // Reset selections
    document.querySelectorAll('.scenario-card, .category-btn, .video-btn').forEach(el => {
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
    
    updateBreadcrumb();
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

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initDemo, 100);
    
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
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    });
}
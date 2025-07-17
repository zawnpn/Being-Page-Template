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
        },
        health_fitness: {
            name: "Health & Fitness",
            description: "Exercise, wellness, and health activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                exercise: {
                    name: "Exercise",
                    categories: {
                        cardio: {
                            name: "Cardio Workouts",
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
                        strength: {
                            name: "Strength Training",
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
                        }
                    }
                },
                wellness: {
                    name: "Wellness",
                    categories: {
                        meditation: {
                            name: "Meditation",
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
                }
            }
        },
        education_learning: {
            name: "Education & Learning",
            description: "Study, research, and learning activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                study: {
                    name: "Study Sessions",
                    categories: {
                        reading: {
                            name: "Reading",
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
                        research: {
                            name: "Research",
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
                }
            }
        },
        entertainment_leisure: {
            name: "Entertainment & Leisure",
            description: "Recreation, hobbies, and leisure activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                gaming: {
                    name: "Gaming",
                    categories: {
                        video_games: {
                            name: "Video Games",
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
                        }
                    }
                },
                arts_crafts: {
                    name: "Arts & Crafts",
                    categories: {
                        drawing: {
                            name: "Drawing",
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
                }
            }
        },
        shopping_errands: {
            name: "Shopping & Errands",
            description: "Daily errands and shopping activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                grocery_shopping: {
                    name: "Grocery Shopping",
                    categories: {
                        store_navigation: {
                            name: "Store Navigation",
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
                        }
                    }
                },
                banking: {
                    name: "Banking",
                    categories: {
                        atm_usage: {
                            name: "ATM Usage",
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
                }
            }
        },
        social_activities: {
            name: "Social Activities",
            description: "Interactions and social engagement",
            thumbnail: "assets/image/scenarios/scene_1.png",
            categories: {
                communication: {
                    name: "Communication",
                    categories: {
                        phone_calls: {
                            name: "Phone Calls",
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
                        }
                    }
                },
                social_media: {
                    name: "Social Media",
                    categories: {
                        posting: {
                            name: "Posting Content",
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
    currentNavigation.category1 = null;
    currentNavigation.category2 = null;
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

// Select category level 1
function selectCategory1(categoryKey) {
    currentNavigation.category1 = categoryKey;
    currentNavigation.category2 = null;
    currentNavigation.selectedVideo = null;
    
    // Update visual selection
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    // Find the clicked button without using deprecated event
    const clickedBtn = document.querySelector(`.category-btn[onclick*="${categoryKey}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('selected');
    }
    
    const scenario = demoData.scenarios[currentNavigation.scenario];
    const category = scenario.categories[categoryKey];
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    console.log('Selected category 1:', categoryKey);
}

// Build breadcrumb path display
function buildBreadcrumbPath() {
    const pathItems = [];
    
    if (currentNavigation.scenario) {
        const scenario = demoData.scenarios[currentNavigation.scenario];
        pathItems.push(`<span class="breadcrumb-item clickable" onclick="navigateFromBreadcrumb('scenario')">${scenario.name}</span>`);
        
        if (currentNavigation.category1) {
            const category1 = scenario.categories[currentNavigation.category1];
            const isClickable = currentNavigation.category2 || currentNavigation.selectedVideo;
            const clickHandler = isClickable ? ` onclick="navigateFromBreadcrumb('category1')"` : '';
            const classes = isClickable ? 'breadcrumb-item clickable' : 'breadcrumb-item current';
            pathItems.push(`<span class="${classes}"${clickHandler}>${category1.name}</span>`);
            
            if (currentNavigation.category2) {
                const category2 = category1.categories[currentNavigation.category2];
                const isClickable = currentNavigation.selectedVideo;
                const clickHandler = isClickable ? ` onclick="navigateFromBreadcrumb('category2')"` : '';
                const classes = isClickable ? 'breadcrumb-item clickable' : 'breadcrumb-item current';
                pathItems.push(`<span class="${classes}"${clickHandler}>${category2.name}</span>`);
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
                    pathItems.push(`<span class="breadcrumb-item current">${videos[currentNavigation.selectedVideo].name}</span>`);
                }
            }
        }
    }
    
    return pathItems;
}

// Select category level 2
function selectCategory2(categoryKey) {
    currentNavigation.category2 = categoryKey;
    currentNavigation.selectedVideo = null;
    
    // Update visual selection
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    // Find the clicked button without using deprecated event
    const clickedBtn = document.querySelector(`.category-btn[onclick*="${categoryKey}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('selected');
    }
    
    updateIntegratedBreadcrumb();
    console.log('Selected category 2:', categoryKey);
}

// Build breadcrumb options display
function buildBreadcrumbOptions() {
    if (!currentNavigation.scenario) {
        return '<span class="breadcrumb-hint">Select a scenario above to continue</span>';
    }
    
    const scenario = demoData.scenarios[currentNavigation.scenario];
    
    // Show category1 options
    if (!currentNavigation.category1) {
        const options = Object.keys(scenario.categories).map(categoryKey => {
            const category = scenario.categories[categoryKey];
            return `<button class="breadcrumb-option" onclick="selectCategory1('${categoryKey}')">${category.name}</button>`;
        }).join('');
        return `<div class="breadcrumb-options-container">${options}</div>`;
    }
    
    const category1 = scenario.categories[currentNavigation.category1];
    
    // Show category2 options
    if (category1.categories && !currentNavigation.category2) {
        const options = Object.keys(category1.categories).map(categoryKey => {
            const category = category1.categories[categoryKey];
            return `<button class="breadcrumb-option" onclick="selectCategory2('${categoryKey}')">${category.name}</button>`;
        }).join('');
        return `<div class="breadcrumb-options-container">${options}</div>`;
    }
    
    // Show video options
    let videos = null;
    if (currentNavigation.category2 && category1.categories) {
        const category2 = category1.categories[currentNavigation.category2];
        videos = category2.videos;
    } else {
        videos = category1.videos;
    }
    
    if (videos && !currentNavigation.selectedVideo) {
        const options = Object.keys(videos).map(videoKey => {
            const video = videos[videoKey];
            return `<button class="breadcrumb-option" onclick="selectVideo('${videoKey}')">${video.name}</button>`;
        }).join('');
        return `<div class="breadcrumb-options-container">${options}</div>`;
    }
    
    return '';
}

// Select video
function selectVideo(videoKey) {
    currentNavigation.selectedVideo = videoKey;
    
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
    updateIntegratedBreadcrumb();
    
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

// Update breadcrumb navigation with clickable functionality
// Legacy function redirects to new integrated breadcrumb system
function updateBreadcrumb() {
    updateIntegratedBreadcrumb();
}

// Navigate back from breadcrumb click
function navigateFromBreadcrumb(level) {
    switch (level) {
        case 'scenario':
            // Go back to scenario selection (show category level 1)
            currentNavigation.category1 = null;
            currentNavigation.category2 = null;
            currentNavigation.selectedVideo = null;
            break;
        case 'category1':
            // Go back to category 1 selection (show category level 2 or video level)
            currentNavigation.category2 = null;
            currentNavigation.selectedVideo = null;
            break;
        case 'category2':
            // Go back to category 2 selection (show video level)
            currentNavigation.selectedVideo = null;
            break;
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

// Reset navigation
function resetNavigation() {
    currentNavigation = {
        scenario: null,
        category1: null,
        category2: null,
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
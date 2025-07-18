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
    maxCategoryLevels: 0, // Maximum depth of category navigation (0 = scenario->category->videos only)
    
    scenarios: {
        home_activities: {
            name: "Home Activities",
            description: "Daily household tasks and activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                kitchen_cooking: {
                    name: "Kitchen Cooking",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Cooking activities in the kitchen"
                },
                kitchen_cleaning: {
                    name: "Kitchen Cleaning", 
                    video: "assets/video/prediction/task1.mp4",
                    description: "Cleaning activities in the kitchen"
                },
                bathroom_hygiene: {
                    name: "Bathroom Hygiene",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Personal hygiene activities"
                },
                living_room: {
                    name: "Living Room",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Living room activities"
                }
            }
        },
        work_activities: {
            name: "Work Activities",
            description: "Professional and productivity tasks",
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                computer_typing: {
                    name: "Computer Typing",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Computer typing activities"
                },
                computer_navigation: {
                    name: "Computer Navigation",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Computer navigation activities"
                },
                desk_organization: {
                    name: "Desk Organization",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Desk organization activities"
                }
            }
        },
        outdoor_activities: {
            name: "Outdoor Activities",
            description: "Garden and outdoor maintenance tasks",
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                garden_care: {
                    name: "Garden Care",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Garden care activities"
                },
                garden_tools: {
                    name: "Garden Tools",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Garden tools usage"
                },
                outdoor_maintenance: {
                    name: "Outdoor Maintenance",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Outdoor maintenance activities"
                }
            }
        },
        health_fitness: {
            name: "Health & Fitness",
            description: "Exercise, wellness, and health activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                exercise_cardio: {
                    name: "Exercise - Cardio",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Cardio exercise activities"
                },
                exercise_strength: {
                    name: "Exercise - Strength",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Strength training activities"
                },
                wellness_meditation: {
                    name: "Wellness - Meditation",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Wellness and meditation activities"
                }
            }
        },
        education_learning: {
            name: "Education & Learning",
            description: "Study, research, and learning activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                study_reading: {
                    name: "Study - Reading",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Study and reading activities"
                },
                study_research: {
                    name: "Study - Research",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Research and analysis activities"
                }
            }
        },
        entertainment_leisure: {
            name: "Entertainment & Leisure",
            description: "Recreation, hobbies, and leisure activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                gaming_video: {
                    name: "Gaming - Video Games",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Video gaming activities"
                },
                arts_drawing: {
                    name: "Arts - Drawing",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Drawing and art activities"
                }
            }
        },
        shopping_errands: {
            name: "Shopping & Errands",
            description: "Daily errands and shopping activities",
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                grocery_navigation: {
                    name: "Grocery - Navigation",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Grocery shopping activities"
                },
                banking_atm: {
                    name: "Banking - ATM",
                    video: "assets/video/prediction/task1.mp4",
                    description: "ATM and banking activities"
                }
            }
        },
        // EXAMPLE: To enable 3-level navigation, change maxCategoryLevels to 2 and uncomment this:
        // example_3level: {
        //     name: "Example 3-Level",
        //     description: "Demonstrates 3-level category navigation",
        //     thumbnail: "assets/image/scenarios/scene_1.jpg",
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
        //                             video: "assets/video/prediction/task1.mp4"
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
            thumbnail: "assets/image/scenarios/scene_1.jpg",
            categories: {
                communication_phone: {
                    name: "Communication - Phone",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Phone communication activities"
                },
                social_posting: {
                    name: "Social - Posting",
                    video: "assets/video/prediction/task1.mp4",
                    description: "Social media posting activities"
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
const sliderStep = 250; // pixels per slide (adjusted for larger cards)

// Initialize the demo
function initDemo() {
    console.log('Initializing hierarchical interactive demo');
    renderScenarios();
    resetNavigation();
    
    // Auto-select first scenario
    const firstScenarioKey = Object.keys(demoData.scenarios)[0];
    if (firstScenarioKey) {
        selectScenario(firstScenarioKey);
    }
    
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
    
    // Check if button should be disabled
    const leftBtn = document.getElementById('scenarioSliderLeft');
    const rightBtn = document.getElementById('scenarioSliderRight');
    
    if (direction === 'left' && leftBtn && !leftBtn.disabled) {
        sliderOffset = Math.max(0, sliderOffset - sliderStep);
    } else if (direction === 'right' && rightBtn && !rightBtn.disabled) {
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
    
    // Always show buttons
    leftBtn.style.display = 'flex';
    rightBtn.style.display = 'flex';
    
    // Enable/disable based on current position
    if (trackWidth > viewportWidth) {
        leftBtn.disabled = sliderOffset <= 0;
        rightBtn.disabled = sliderOffset >= maxOffset;
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

// Select scenario
function selectScenario(scenarioKey) {
    currentNavigation.scenario = scenarioKey;
    currentNavigation.categories = [];
    currentNavigation.selectedVideo = null;
    
    // Update visual selection
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Find the clicked scenario card and add selected class
    const scenarioCards = document.querySelectorAll('.scenario-card');
    scenarioCards.forEach(card => {
        const cardText = card.querySelector('.scenario-name');
        if (cardText && cardText.textContent === demoData.scenarios[scenarioKey].name) {
            card.classList.add('selected');
        }
    });
    
    // Show scenario image in video area
    const scenario = demoData.scenarios[scenarioKey];
    if (scenario && scenario.thumbnail) {
        showScenarioImage(scenario.thumbnail, scenario.name);
    }
    
    // Show categories in scenario-section
    renderCategories(scenarioKey);
    
    // Update integrated breadcrumb navigation
    updateIntegratedBreadcrumb();
    
    console.log('Selected scenario:', scenarioKey);
}

// Update integrated breadcrumb navigation
function updateIntegratedBreadcrumb() {
    const breadcrumbNav = document.getElementById('breadcrumbNav');
    const breadcrumbPath = document.getElementById('breadcrumbPath');
    
    if (!breadcrumbNav || !breadcrumbPath) return;
    
    // Build and display current path
    const pathItems = buildBreadcrumbPath();
    breadcrumbPath.innerHTML = pathItems.length > 0 ? pathItems.join(' › ') : 'Select a scene to begin';

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

// Build breadcrumb path display (simplified for 2-level navigation)
function buildBreadcrumbPath() {
    const pathItems = [];
    
    if (currentNavigation.scenario) {
        const scenario = demoData.scenarios[currentNavigation.scenario];
        pathItems.push(`<span class="breadcrumb-item clickable" onclick="navigateFromBreadcrumb('scenario')">${scenario.name}</span>`);
        
        // Add category if selected (only one level, no video names)
        if (currentNavigation.categories.length > 0) {
            const categoryKey = currentNavigation.categories[0];
            if (scenario.categories && scenario.categories[categoryKey]) {
                const category = scenario.categories[categoryKey];
                // Category is just text, not clickable
                pathItems.push(`<span class="breadcrumb-item">${category.name}</span>`);
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

// Show scenario image function
function showScenarioImage(imageSrc, title) {
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
    
    console.log('Showing scenario image:', title, imageSrc);
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

// Smooth scroll to center the scenario selection area
function scrollToScenarioSelection() {
    // Find the scenario selection area
    const scenarioSection = document.querySelector('.scenario-section');
    if (!scenarioSection) return;
    
    // Small delay to ensure content is rendered
    setTimeout(() => {
        // Scroll to center the scenario selection area
        scenarioSection.scrollIntoView({ 
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

// Navigate back from breadcrumb click (modular for n-levels)
function navigateFromBreadcrumb(level, categoryIndex = null) {
    if (level === 'scenario') {
        // Go back to category selection (clear categories but keep scenario)
        currentNavigation.categories = [];
        currentNavigation.selectedVideo = null;
        
        // Show scenario image if available
        const scenario = demoData.scenarios[currentNavigation.scenario];
        if (scenario && scenario.thumbnail) {
            showScenarioImage(scenario.thumbnail, scenario.name);
        }
        
        // Re-render categories for current scenario
        renderCategories(currentNavigation.scenario);
        
        // Scroll to center the scenario selection area
        scrollToScenarioSelection();
        
    } else if (level === 'category' && categoryIndex !== null) {
        // Go back to specific category level
        currentNavigation.categories = currentNavigation.categories.slice(0, categoryIndex + 1);
        currentNavigation.selectedVideo = null;
        
        // Show scenario image
        const scenario = demoData.scenarios[currentNavigation.scenario];
        if (scenario && scenario.thumbnail) {
            showScenarioImage(scenario.thumbnail, scenario.name);
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
    
    if (breadcrumbPath) {
        breadcrumbPath.innerHTML = 'Select a scene to begin';
    }
    
    // Reset category display - always show container
    const categoryContainer = document.getElementById('categoryContainer');
    if (categoryContainer) {
        categoryContainer.innerHTML = `
            <div class="category-selection">
                <span class="category-title">Select Action</span>
                <div class="category-options">
                    <span class="breadcrumb-hint">Select a scene first</span>
                </div>
            </div>
        `;
        categoryContainer.style.display = 'block';
    }
    
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
                <p>Select a scene to begin</p>
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
    
    // Scroll to center the scenario selection area
    scrollToScenarioSelection();
    
    console.log('Demo reset');
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
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

// Enhanced Interactive Demo with Tree-like Step Progression
const demoData = {
    maxSteps: 3,
    scenarios: {
        kitchen: {
            name: "Kitchen",
            description: "Cooking and food preparation tasks",
            thumbnail: "assets/image/scenarios/scene_1.png",
            initialVideo: "assets/video/demo1.mp4",
            operations: {
                wash_hands: { 
                    name: "Wash hands", 
                    description: "Clean hands before cooking", 
                    video: "assets/video/demo1.mp4" 
                },
                pick_up_bowl: { 
                    name: "Pick up bowl", 
                    description: "Grab mixing bowl", 
                    video: "assets/video/demo1.mp4" 
                },
                cut_carrots: { 
                    name: "Cut carrots", 
                    description: "Slice carrots for cooking", 
                    video: "assets/video/demo1.mp4" 
                },
                dry_hands: { 
                    name: "Dry hands", 
                    description: "Use towel to dry hands", 
                    video: "assets/video/demo1.mp4" 
                },
                wash_bowl: { 
                    name: "Wash bowl", 
                    description: "Clean the bowl after use", 
                    video: "assets/video/demo1.mp4" 
                }
            }
        },
        bathroom: {
            name: "Bathroom",
            description: "Personal hygiene and cleaning tasks",
            thumbnail: "assets/image/scenarios/scene_1.png",
            initialVideo: "assets/video/demo1.mp4",
            operations: {
                brush_teeth: { 
                    name: "Brush teeth", 
                    description: "Morning dental hygiene", 
                    video: "assets/video/demo1.mp4" 
                },
                wash_face: { 
                    name: "Wash face", 
                    description: "Cleanse facial area", 
                    video: "assets/video/demo1.mp4" 
                },
                use_towel: { 
                    name: "Use towel", 
                    description: "Dry face with towel", 
                    video: "assets/video/demo1.mp4" 
                },
                apply_soap: { 
                    name: "Apply soap", 
                    description: "Use soap for washing", 
                    video: "assets/video/demo1.mp4" 
                }
            }
        },
        office: {
            name: "Office",
            description: "Work and productivity tasks",
            thumbnail: "assets/image/scenarios/scene_1.png",
            initialVideo: "assets/video/demo1.mp4",
            operations: {
                type_keyboard: { 
                    name: "Type on keyboard", 
                    description: "Input text on computer", 
                    video: "assets/video/demo1.mp4" 
                },
                move_mouse: { 
                    name: "Move mouse", 
                    description: "Navigate computer interface", 
                    video: "assets/video/demo1.mp4" 
                },
                pick_up_pen: { 
                    name: "Pick up pen", 
                    description: "Grab writing instrument", 
                    video: "assets/video/demo1.mp4" 
                },
                open_drawer: { 
                    name: "Open drawer", 
                    description: "Access storage compartment", 
                    video: "assets/video/demo1.mp4" 
                }
            }
        },
        living_room: {
            name: "Living Room",
            description: "Relaxation and entertainment activities",
            thumbnail: "assets/image/scenarios/scene_1.png",
            initialVideo: "assets/video/demo1.mp4",
            operations: {
                pick_up_remote: { 
                    name: "Pick up remote", 
                    description: "Grab TV remote control", 
                    video: "assets/video/demo1.mp4" 
                },
                adjust_cushions: { 
                    name: "Adjust cushions", 
                    description: "Arrange sofa cushions", 
                    video: "assets/video/demo1.mp4" 
                },
                open_book: { 
                    name: "Open book", 
                    description: "Start reading activity", 
                    video: "assets/video/demo1.mp4" 
                },
                turn_on_lamp: { 
                    name: "Turn on lamp", 
                    description: "Provide room lighting", 
                    video: "assets/video/demo1.mp4" 
                }
            }
        },
        garden: {
            name: "Garden",
            description: "Outdoor gardening and maintenance",
            thumbnail: "assets/image/scenarios/scene_1.png",
            initialVideo: "assets/video/demo1.mp4",
            operations: {
                water_plants: { 
                    name: "Water plants", 
                    description: "Irrigate garden plants", 
                    video: "assets/video/demo1.mp4" 
                },
                pick_flowers: { 
                    name: "Pick flowers", 
                    description: "Harvest blooming flowers", 
                    video: "assets/video/demo1.mp4" 
                },
                use_pruners: { 
                    name: "Use pruners", 
                    description: "Trim plant branches", 
                    video: "assets/video/demo1.mp4" 
                },
                collect_seeds: { 
                    name: "Collect seeds", 
                    description: "Gather seeds for planting", 
                    video: "assets/video/demo1.mp4" 
                }
            }
        }
    }
};

// Demo state management
let selectedScenario = null;
let currentStep = 0; // 0 = scenario selection, 1-3 = action steps
let actionSequence = []; // Array to store the sequence of selected actions

// Initialize the demo
function initDemo() {
    console.log('Initializing tree-like interactive demo');
    renderScenarios();
    updateStepCounter();
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
}

// No slider controls needed - full horizontal scroll

// Select a scenario and show its initial video
function selectScenario(scenarioKey) {
    selectedScenario = scenarioKey;
    currentStep = 1;
    actionSequence = []; // Reset action sequence
    
    // Update visual selection
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    event.target.closest('.scenario-card').classList.add('selected');
    
    // Show initial scenario video
    const scenario = demoData.scenarios[scenarioKey];
    showVideo(scenario.initialVideo, `${scenario.name} - Initial State`);
    
    // Show action selection for step 1
    showActionSelection();
    
    // Update UI
    updateStepCounter();
    updateSequencePath();
    
    console.log('Selected scenario:', scenarioKey);
}

// Show action selection for current step
function showActionSelection() {
    const actionSection = document.getElementById('actionSection');
    const actionTitle = document.getElementById('actionTitle');
    const actionsGrid = document.getElementById('actionsGrid');
    
    if (!actionSection || !actionTitle || !actionsGrid || !selectedScenario) return;
    
    // Show action section
    actionSection.style.display = 'block';
    
    // Update title
    if (currentStep > demoData.maxSteps) {
        actionTitle.textContent = 'Sequence Complete!';
        actionsGrid.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--demo-light-text);">
                <h3>All steps completed!</h3>
                <p>You've completed a ${demoData.maxSteps}-step interaction sequence.</p>
            </div>
        `;
        return;
    }
    
    actionTitle.textContent = `Select Action for Step ${currentStep}`;
    
    // Render available actions
    const scenario = demoData.scenarios[selectedScenario];
    actionsGrid.innerHTML = '';
    
    Object.keys(scenario.operations).forEach(actionKey => {
        const action = scenario.operations[actionKey];
        const card = document.createElement('div');
        card.className = 'action-card';
        card.onclick = () => selectAction(actionKey, action);
        
        card.innerHTML = `
            <div class="action-name">${action.name}</div>
        `;
        
        actionsGrid.appendChild(card);
    });
    
    console.log('Showing actions for step', currentStep);
}

// Select an action and immediately show its video
function selectAction(actionKey, action) {
    console.log('Selected action:', action.name, 'for step', currentStep);
    
    // Add action to sequence
    actionSequence.push({
        step: currentStep,
        key: actionKey,
        name: action.name,
        description: action.description
    });
    
    // Immediately show the action's video
    showVideo(action.video, `Step ${currentStep}: ${action.name}`);
    
    // Move to next step
    currentStep++;
    
    // Update UI
    updateStepCounter();
    updateSequencePath();
    showUndoButton();
    
    // Show next action selection or completion
    setTimeout(() => {
        showActionSelection();
    }, 800); // Small delay to let user see the action result
}

// Show video in the display area
function showVideo(videoSrc, title) {
    const videoDisplay = document.getElementById('videoDisplay');
    if (!videoDisplay) return;
    
    videoDisplay.classList.add('playing');
    videoDisplay.innerHTML = `
        <video controls autoplay muted>
            <source src="${videoSrc}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: white; padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">
            ${title}
        </div>
    `;
    
    // Reset playing state when video ends
    const video = videoDisplay.querySelector('video');
    if (video) {
        video.addEventListener('ended', () => {
            videoDisplay.classList.remove('playing');
        });
    }
}

// Update step counter
function updateStepCounter() {
    const stepCounter = document.getElementById('stepCounter');
    if (!stepCounter) return;
    
    if (!selectedScenario) {
        stepCounter.textContent = 'Step 1: Choose Scenario';
    } else if (currentStep <= demoData.maxSteps) {
        stepCounter.textContent = `Step ${currentStep + 1}: Select Action ${currentStep}`;
    } else {
        stepCounter.textContent = 'Sequence Complete!';
    }
}

// Update sequence path display
function updateSequencePath() {
    const sequencePath = document.getElementById('sequencePath');
    const currentPath = document.getElementById('currentPath');
    const pathSteps = document.getElementById('pathSteps');
    
    if (!sequencePath) return;
    
    sequencePath.innerHTML = '';
    
    if (selectedScenario && actionSequence.length > 0) {
        const scenario = demoData.scenarios[selectedScenario];
        
        // Add scenario to path
        const scenarioItem = document.createElement('div');
        scenarioItem.className = 'path-item';
        scenarioItem.textContent = scenario.name;
        sequencePath.appendChild(scenarioItem);
        
        // Add actions to path
        actionSequence.forEach((action, index) => {
            // Add arrow
            const arrow = document.createElement('span');
            arrow.className = 'path-arrow';
            arrow.textContent = '→';
            sequencePath.appendChild(arrow);
            
            // Add action
            const actionItem = document.createElement('div');
            actionItem.className = 'path-item';
            actionItem.textContent = `${action.step}. ${action.name}`;
            sequencePath.appendChild(actionItem);
        });
        
        // Show current path section
        if (currentPath) {
            currentPath.style.display = 'block';
            if (pathSteps) {
                pathSteps.innerHTML = actionSequence.map((action, index) => `
                    <div class="path-step">
                        <div class="step-num">${action.step}</div>
                        ${action.name}
                    </div>
                    ${index < actionSequence.length - 1 ? '<span class="path-arrow">→</span>' : ''}
                `).join('');
            }
        }
    } else if (currentPath) {
        currentPath.style.display = 'none';
    }
}

// Show undo button when there are actions to undo
function showUndoButton() {
    const undoBtn = document.getElementById('undoBtn');
    if (undoBtn && actionSequence.length > 0) {
        undoBtn.style.display = 'inline-block';
    }
}

// Undo last step
function undoLastStep() {
    if (actionSequence.length === 0) return;
    
    // Remove last action from sequence
    actionSequence.pop();
    currentStep--;
    
    // Show previous state
    if (actionSequence.length === 0) {
        // Back to initial scenario video
        const scenario = demoData.scenarios[selectedScenario];
        showVideo(scenario.initialVideo, `${scenario.name} - Initial State`);
    } else {
        // Show video of previous action
        const lastAction = actionSequence[actionSequence.length - 1];
        const scenario = demoData.scenarios[selectedScenario];
        const action = scenario.operations[lastAction.key];
        showVideo(action.video, `Step ${lastAction.step}: ${lastAction.name}`);
    }
    
    // Update UI
    updateStepCounter();
    updateSequencePath();
    showActionSelection();
    
    // Hide undo button if no more actions
    if (actionSequence.length === 0) {
        const undoBtn = document.getElementById('undoBtn');
        if (undoBtn) undoBtn.style.display = 'none';
    }
    
    console.log('Undid last step. Current sequence:', actionSequence);
}

// Reset demo to initial state
function resetDemo() {
    selectedScenario = null;
    currentStep = 0;
    actionSequence = [];
    
    // Reset UI
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const actionSection = document.getElementById('actionSection');
    if (actionSection) actionSection.style.display = 'none';
    
    const undoBtn = document.getElementById('undoBtn');
    if (undoBtn) undoBtn.style.display = 'none';
    
    const currentPath = document.getElementById('currentPath');
    if (currentPath) currentPath.style.display = 'none';
    
    const videoDisplay = document.getElementById('videoDisplay');
    if (videoDisplay) {
        videoDisplay.classList.remove('playing');
        videoDisplay.innerHTML = `
            <div class="demo-placeholder">
                <div class="icon">🎬</div>
                <p>Select a scenario to begin</p>
            </div>
        `;
    }
    
    updateStepCounter();
    updateSequencePath();
    
    console.log('Demo reset');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize demo
    setTimeout(initDemo, 100);
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
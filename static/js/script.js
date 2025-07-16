// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('scrollIndicator').style.width = scrolled + '%';
});

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

// Interactive Demo Data and Functions
const demoData = {
    // Configuration
    maxSteps: 3, // Maximum number of steps allowed per sequence
    
    scenarios: {
        kitchen: {
            name: "Kitchen",
            thumbnail: "assets/image/scenarios/scene_1.png", // Placeholder - replace with real thumbnails
            initialImage: "assets/image/scenarios/scene_1.png", // Placeholder - replace with real images
            operations: {
                wash_hands: { name: "Wash hands", video: "assets/video/demo1.mp4" },
                pick_up_bowl: { name: "Pick up bowl", video: "assets/video/demo1.mp4" },
                cut_carrots: { name: "Cut carrots", video: "assets/video/demo1.mp4" },
                dry_hands: { name: "Dry hands", video: "assets/video/demo1.mp4" },
                wash_bowl: { name: "Wash bowl", video: "assets/video/demo1.mp4" },
                shut_off_water: { name: "Shut off water", video: "assets/video/demo1.mp4" }
            }
        },
        bathroom: {
            name: "Bathroom",
            thumbnail: "assets/image/scenarios/scene_1.png", // Placeholder
            initialImage: "assets/image/scenarios/scene_1.png", // Placeholder
            operations: {
                brush_teeth: { name: "Brush teeth", video: "assets/video/demo1.mp4" },
                wash_face: { name: "Wash face", video: "assets/video/demo1.mp4" },
                use_towel: { name: "Use towel", video: "assets/video/demo1.mp4" },
                apply_soap: { name: "Apply soap", video: "assets/video/demo1.mp4" }
            }
        },
        office: {
            name: "Office",
            thumbnail: "assets/image/scenarios/scene_1.png", // Placeholder
            initialImage: "assets/image/scenarios/scene_1.png", // Placeholder
            operations: {
                type_keyboard: { name: "Type on keyboard", video: "assets/video/demo1.mp4" },
                move_mouse: { name: "Move mouse", video: "assets/video/demo1.mp4" },
                pick_up_pen: { name: "Pick up pen", video: "assets/video/demo1.mp4" },
                open_drawer: { name: "Open drawer", video: "assets/video/demo1.mp4" }
            }
        }
    }
};

let currentScenario = null;
let selectedOperations = [];
let currentStep = 1;

// Initialize the demo
function initDemo() {
    // Set step limit text dynamically
    const stepLimitElement = document.getElementById('stepLimitText');
    if (stepLimitElement) {
        stepLimitElement.textContent = `You can select up to ${demoData.maxSteps} steps to build your sequence.`;
    }
    
    renderScenarios();
}

// Render scenario selection
function renderScenarios() {
    const grid = document.getElementById('scenarioGrid');
    if (!grid) return; // Exit if element doesn't exist
    
    grid.innerHTML = '';

    Object.keys(demoData.scenarios).forEach(scenarioKey => {
        const scenario = demoData.scenarios[scenarioKey];
        const item = document.createElement('div');
        item.className = 'scenario-item';
        item.onclick = () => selectScenario(scenarioKey, item);
        
        item.innerHTML = `
            <img src="${scenario.thumbnail}" alt="${scenario.name}" onerror="this.src='assets/image/framework.png'">
            <div class="scenario-name">${scenario.name}</div>
        `;
        
        grid.appendChild(item);
    });
}

// Select a scenario
function selectScenario(scenarioKey, element) {
    currentScenario = scenarioKey;
    selectedOperations = [];
    currentStep = 1;

    // Update UI
    document.querySelectorAll('.scenario-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    // Show initial image
    showInitialImage();
    
    // Show operation section
    const operationSection = document.getElementById('operationSection');
    if (operationSection) {
        operationSection.style.display = 'block';
        renderOperationSteps();
    }
    
    // Hide sequence display initially
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    const executeBtn = document.getElementById('executeBtn');
    if (sequenceDisplay) sequenceDisplay.style.display = 'none';
    if (executeBtn) executeBtn.style.display = 'none';
}

// Show initial scenario image
function showInitialImage() {
    const scenario = demoData.scenarios[currentScenario];
    const display = document.getElementById('demoDisplay');
    if (!display) return;
    
    display.innerHTML = `
        <img src="${scenario.initialImage}" alt="${scenario.name} initial state" 
             style="width: 100%; max-height: 400px; object-fit: contain; border-radius: 8px;"
             onerror="this.src='assets/image/framework.png'">
        <div class="demo-info">${scenario.name} - Initial State</div>
    `;
}

// Render operation steps
function renderOperationSteps() {
    const stepsContainer = document.getElementById('operationSteps');
    if (!stepsContainer) return;
    
    const scenario = demoData.scenarios[currentScenario];
    
    stepsContainer.innerHTML = `
        <div class="operation-step">
            <div class="step-label">Step ${currentStep} of ${demoData.maxSteps}:</div>
            <div class="operation-buttons">
                ${Object.keys(scenario.operations).map(opKey => {
                    const op = scenario.operations[opKey];
                    return `<button class="operation-btn" onclick="selectOperation('${opKey}')">${op.name}</button>`;
                }).join('')}
                <button class="operation-btn more-btn">...</button>
            </div>
        </div>
    `;
}

// Select an operation
function selectOperation(operationKey) {
    // Check if we've reached the maximum steps
    if (currentStep > demoData.maxSteps) {
        return; // Don't allow more operations
    }
    
    const scenario = demoData.scenarios[currentScenario];
    const operation = scenario.operations[operationKey];
    
    selectedOperations.push({
        key: operationKey,
        name: operation.name,
        step: currentStep
    });

    // Show operation video
    showOperationVideo(operation);
    
    // Update sequence display
    updateSequenceDisplay();
    
    // Check if we've reached the maximum steps
    if (currentStep >= demoData.maxSteps) {
        // Show completion message and execute button
        showSequenceComplete();
    } else {
        // Add next step
        currentStep++;
        renderNextStep();
    }
    
    // Show execute button
    const executeBtn = document.getElementById('executeBtn');
    if (executeBtn) executeBtn.style.display = 'inline-block';
}

// Show operation video
function showOperationVideo(operation) {
    const display = document.getElementById('demoDisplay');
    if (!display) return;
    
    display.innerHTML = `
        <video class="demo-video active" controls autoplay muted>
            <source src="${operation.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="demo-info">Step ${currentStep}: ${operation.name}</div>
    `;
}

// Update sequence display
function updateSequenceDisplay() {
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    const sequenceSteps = document.getElementById('sequenceSteps');
    if (!sequenceDisplay || !sequenceSteps) return;
    
    sequenceDisplay.style.display = 'block';
    sequenceSteps.innerHTML = selectedOperations.map(op => 
        `<span class="sequence-step">${op.step}. ${op.name}</span>`
    ).join('');
}

// Show sequence completion
function showSequenceComplete() {
    const stepsContainer = document.getElementById('operationSteps');
    if (!stepsContainer) return;
    
    // Add completion message
    const completionDiv = document.createElement('div');
    completionDiv.className = 'sequence-complete';
    completionDiv.innerHTML = `
        <div class="completion-message">
            <div class="completion-icon">✅</div>
            <div class="completion-text">
                <strong>Sequence Complete!</strong><br>
                You've selected ${demoData.maxSteps} operations. Click "Execute Sequence" to see the full demonstration.
            </div>
        </div>
    `;
    
    stepsContainer.appendChild(completionDiv);
}

// Render next step
function renderNextStep() {
    const stepsContainer = document.getElementById('operationSteps');
    if (!stepsContainer) return;
    
    const scenario = demoData.scenarios[currentScenario];
    
    // Add new step
    const newStep = document.createElement('div');
    newStep.className = 'operation-step';
    newStep.innerHTML = `
        <div class="step-label">Step ${currentStep} of ${demoData.maxSteps}:</div>
        <div class="operation-buttons">
            ${Object.keys(scenario.operations).map(opKey => {
                const op = scenario.operations[opKey];
                return `<button class="operation-btn" onclick="selectOperation('${opKey}')">${op.name}</button>`;
            }).join('')}
            <button class="operation-btn more-btn">...</button>
        </div>
    `;
    
    stepsContainer.appendChild(newStep);
}

// Execute full sequence
function executeSequence() {
    if (selectedOperations.length === 0) return;
    
    const display = document.getElementById('demoDisplay');
    if (!display) return;
    
    display.innerHTML = `
        <video class="demo-video active" controls autoplay muted>
            <source src="assets/video/demo1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="demo-info">Executing Full Sequence (${selectedOperations.length} steps)</div>
    `;
}

// Reset demo
function resetDemo() {
    currentScenario = null;
    selectedOperations = [];
    currentStep = 1;
    
    // Reset UI
    document.querySelectorAll('.scenario-item').forEach(item => item.classList.remove('active'));
    
    const operationSection = document.getElementById('operationSection');
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    const executeBtn = document.getElementById('executeBtn');
    
    if (operationSection) operationSection.style.display = 'none';
    if (sequenceDisplay) sequenceDisplay.style.display = 'none';
    if (executeBtn) executeBtn.style.display = 'none';
    
    // Reset display
    const display = document.getElementById('demoDisplay');
    if (display) {
        display.innerHTML = `
            <div class="demo-placeholder">
                <div class="icon">🎬</div>
                <p>Select a scenario to begin the demonstration</p>
            </div>
        `;
    }
}

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

// Initialize demo when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure all elements are loaded
    setTimeout(initDemo, 100);
});
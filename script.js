// Import Firebase modules
import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// DOM Elements
const nameForm = document.getElementById('nameForm');
const nameContainer = document.getElementById('nameContainer');
const storyContainer = document.getElementById('storyContainer');
const userName = document.getElementById('userName');
const storyText = document.getElementById('storyText');
const submitStoryBtn = document.getElementById('submitStory');
const timerElement = document.getElementById('timer');

// Variables
let userName_value = '';
let timerInterval;
let secondsRemaining = 8 * 60; // 8 minutes in seconds
let timerStarted = false;

// Event Listeners
nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (userName.value.trim() === '') {
        alert('Please enter your name');
        return;
    }
    
    // Store the name in a variable and localStorage
    userName_value = userName.value.trim();
    localStorage.setItem('userName', userName_value);
    
    // Hide name form and show story container
    nameContainer.style.display = 'none';
    storyContainer.style.display = 'block';
});

// Start timer when user starts typing
storyText.addEventListener('input', function() {
    if (!timerStarted) {
        startTimer();
        timerStarted = true;
    }
});

// Submit story button
submitStoryBtn.addEventListener('click', function() {
    submitStory();
});

// Functions
function startTimer() {
    timerInterval = setInterval(function() {
        secondsRemaining--;
        
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            submitStory();
            return;
        }
        
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    
    // Format time as MM:SS
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Change color when less than 1 minute remains
    if (secondsRemaining < 60) {
        timerElement.style.color = 'red';
    }
}

// Save data to Firebase
async function saveToFirebase(data) {
    try {
        const docRef = await addDoc(collection(db, 'story-submissions'), {
            name: data.name,
            story: data.story,
            submittedAt: serverTimestamp(),
            timeSpentSeconds: 8 * 60 - secondsRemaining,
            wordCount: data.story.split(/\s+/).filter(Boolean).length
        });
        console.log('Document written with ID:', docRef.id);
        return true;
    } catch (error) {
        console.error('Error adding document:', error);
        return false;
    }
}

async function submitStory() {
    // Stop the timer
    clearInterval(timerInterval);
    
    const story = storyText.value.trim();
    
    if (story === '') {
        alert('Please write a story before submitting');
        return;
    }
    
    // Store story in localStorage (as backup)
    localStorage.setItem('userStory', story);
    
    // Create an object to store data
    const submissionData = {
        name: userName_value,
        story: story,
        submittedAt: new Date().toISOString()
    };
    
    console.log('Submission data:', submissionData);
    
    // Store locally as backup
    localStorage.setItem('submission', JSON.stringify(submissionData));
    
    // Show loading message
    submitStoryBtn.disabled = true;
    submitStoryBtn.textContent = 'Submitting...';
    
    // Save to Firebase
    const saveResult = await saveToFirebase(submissionData);
    
    // Show completion message
    storyContainer.innerHTML = `
        <h1>Thank You!</h1>
        <p>Your story has been submitted successfully${saveResult ? ' and saved to our database' : ''}.</p>
        <p>Name: ${userName_value}</p>
        <div class="story-display">
            <h3>Your Story:</h3>
            <p>${story}</p>
        </div>
    `;
} 
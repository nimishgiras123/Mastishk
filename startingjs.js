let currentStep = 1;

document.getElementById('step1').style.display = 'block';

function nextStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.style.display = 'none';

  currentStep++;
  const nextStepElement = document.getElementById(`step${currentStep}`);
  if (nextStepElement) {
    nextStepElement.style.display = 'block';
  } else {
    startGame();
  }
}

function startGame() {
  // Get user information from the form
  var name1 = document.getElementById('name').value;
  localStorage.setItem("sharedName", name1);
  var age = document.getElementById('age').value;
  var selectedDisability = document.getElementById('cognitive-disability').value;

  // Validate the input if needed

  // Hide the form
  document.getElementById('form-container').style.display = 'none';

  // Show the game container
  document.getElementById('game-container').style.display = 'block';

  // Continue with your game initialization using the gathered information
  // For example, you can customize the game based on the selected cognitive disability
  if (selectedDisability === "dyslexia"){
    var url = '/Dyslexia/index.html';
      window.location.href = url;
  }else if(selectedDisability=="adhd"){
    var url = '/ADHD/index.html';
      window.location.href = url;
  
  }else if(selectedDisability=="autism"){
    var url = '/Autism/index.html';
      window.location.href = url;
  
  }else if(selectedDisability=="downsyndrome"){
    var url = '/DownSyndrome/index.html';
      window.location.href = url;
  
  }else if(selectedDisability=="visualdisorder"){
    var url = '/VisualDisorder/index.html';
      window.location.href = url;
  }else if(selectedDisability=="dyscalculia"){
    var url = '/Dyscalculia/index.html';
      window.location.href = url;
  }
  // ... rest of your game initialization logic ...
}

// File: file1.js


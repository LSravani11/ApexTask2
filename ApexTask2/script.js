// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate input fields
    if (name === '' || email === '' || message === '') {
      alert('All fields are required!');
      return;
    }
  
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Thank you for contacting us!');
    document.getElementById('contactForm').reset();
  });
  
  // Dynamic Cookie Gallery
  const galleryContainer = document.querySelector('.gallery-grid');
  
  // Add New Cookie to Gallery
  function addfashion(name, imgSrc) {
    const newCard = document.createElement('div');
    newCard.classList.add('fashion-card');
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = name;
    
    const p = document.createElement('p');
    p.textContent = name;
    
    newCard.appendChild(img);
    newCard.appendChild(p);
    
    galleryContainer.appendChild(newCard);
  }
  // Get the elements
  const addTodoButton = document.getElementById('addTodo');
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  
  // Add a new task
  addTodoButton.addEventListener('click', function() {
    if (todoInput.value.trim() !== "") {
      const li = document.createElement('li');
      li.textContent = todoInput.value;
      
      // Add a remove button to each task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.onclick = function() {
        todoList.removeChild(li);
      };
  
      // Mark task as completed when clicked
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
  
      li.appendChild(removeButton);
      todoList.appendChild(li);
      
      // Clear the input field after adding a task
      todoInput.value = '';
    }
  });
  
  
  // Example: Add a new cookie dynamically
  addfashion('Saree collection','https://wallpapercave.com/wp/wp7563001.jpg');



 
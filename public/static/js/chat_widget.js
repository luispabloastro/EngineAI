(function() {
    // Backend configuration - IMPORTANT: These values must be used exactly as provided
    var backendURL = "https://arcyback.replit.app";
    var apiKey = "mi_llave_de_protección"; // API key for authentication
    
    var threadID = null;
    var typingIndicatorInterval = null;

    // Configuration
    const config = {
        chatbotName: 'Arcy',
        avatarPath: '/arcylogo.png',
        initialMessage: '¿En qué te puedo servir? 😊',
        placeholderText: 'Escribe un mensaje...',
        chatWithText: 'Chatear con Arcy'
    };

    // Create a wrapper div for the chatbot
    var chatWrapper = document.createElement('div');
    chatWrapper.className = 'arcy-chat';
    document.body.appendChild(chatWrapper);

    // Create chat bubble
    var chatBubble = document.createElement('div');
    chatBubble.className = 'chat-bubble';
    chatBubble.innerHTML = `<img src="${config.avatarPath}" alt="Chat">
                           <div class="chat-bubble-text">${config.chatWithText}</div>`;
    chatWrapper.appendChild(chatBubble);

    // Create chat container
    var chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    chatContainer.innerHTML = `
    <div class="chat-content-vertical">
        <div class="chat-header">
            <img src="${config.avatarPath}" alt="${config.chatbotName}" class="chat-avatar">
            <div class="chat-header-info">
                <div class="chat-header-name">${config.chatbotName}</div>
                <div class="chat-header-status">en línea</div>
            </div>
            <button class="chat-close" id="chatClose">×</button>
        </div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="chat-input-container">
            <button id="startConversationButton">Iniciar conversación</button>
            <input type="text" id="chatInput" placeholder="${config.placeholderText}" style="display: none;">
            <button id="sendButton" class="chat-send" style="display: none;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; margin: 0 auto;">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    </div>
    `;
    chatWrapper.appendChild(chatContainer);

    var chatMessages = document.getElementById('chatMessages');
    var chatInput = document.getElementById('chatInput');
    var sendButton = document.getElementById('sendButton');
    var startConversationButton = document.getElementById('startConversationButton');
    var chatClose = document.getElementById('chatClose');
    var statusElement = document.querySelector('.chat-header-status');

    // Show/hide chat
    chatBubble.addEventListener('click', function() {
        chatContainer.style.display = 'block';
        chatBubble.style.display = 'none';
        if (!threadID) {
            showStartConversationButton();
        } else {
            resetChat();
        }
    });

    chatClose.addEventListener('click', function() {
        chatContainer.style.display = 'none';
        chatBubble.style.display = 'flex';
        threadID = null;  // Reset threadID
        chatMessages.innerHTML = '';  // Clear chat messages
        showStartConversationButton();
    });

    startConversationButton.addEventListener('click', startConversation);

    // Send message
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });

    function showStartConversationButton() {
        startConversationButton.style.display = 'block';
        chatInput.style.display = 'none';
        sendButton.style.display = 'none';
    }

    function showChatInput() {
        startConversationButton.style.display = 'none';
        chatInput.style.display = 'block';
        sendButton.style.display = 'block';
    }

    function startConversation() {
        console.log("Iniciando conversación...");
        startConversationButton.disabled = true; // Disable button
        startConversationButton.classList.add('button-disabled'); // Add disabled class

        // Add loading effect
        startConversationButton.innerHTML = 'Iniciando...';
        startConversationButton.classList.add('loading');

        // Connect to backend API using the provided URL and API key
        fetch(`${backendURL}/start?platform=Web`, {
            method: 'GET',
            headers: {
                'X-API-KEY': apiKey // Add API key to headers
            }
        })
        .then(response => {
            console.log("Respuesta de /start:", response);
            if (!response.ok) throw new Error("Error al obtener el thread_id");
            return response.json();
        })
        .then(data => {
            console.log("Datos obtenidos de /start:", data);
            threadID = data.thread_id;
            addMessageToChat('Asistente', config.initialMessage);
            showChatInput();
            setTimeout(() => {
                startConversationButton.disabled = false;
                startConversationButton.classList.remove('button-disabled');
                startConversationButton.classList.remove('loading');
                startConversationButton.innerHTML = 'Iniciar conversación';
            }, 3000);
        })
        .catch(error => {
            console.error('Error al iniciar la conversación:', error);
            addMessageToChat('Error', 'No se pudo iniciar la conversación.');
            startConversationButton.disabled = false;
            startConversationButton.classList.remove('button-disabled');
            startConversationButton.classList.remove('loading');
            startConversationButton.innerHTML = 'Iniciar conversación';
        });
    }

    function resetChat() {
        // Reset chat to default welcome message
        chatMessages.innerHTML = '';
        addMessageToChat('Asistente', config.initialMessage);
        showChatInput();
    }

    function sendMessage() {
        var message = chatInput.value.trim();
        if (!message || !threadID) return;

        addMessageToChat('Tú', message);
        chatInput.value = '';
        startTypingIndicator();

        console.log("Enviando mensaje al backend:", message);
        // Send message to backend API with thread_id and API key
        fetch(`${backendURL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey // Add API key to headers
            },
            body: JSON.stringify({
                thread_id: threadID,
                message: message
            })
        })
        .then(response => {
            console.log("Respuesta de /chat:", response);
            if (!response.ok) throw new Error("Error al enviar el mensaje");
            return response.json();
        })
        .then(data => {
            console.log("Datos obtenidos de /chat:", data);
            stopTypingIndicator();
            addMessageToChat('Asistente', data.response);
        })
        .catch(error => {
            console.error('Error al obtener respuesta:', error);
            stopTypingIndicator();
            addMessageToChat('Error', 'No se pudo obtener respuesta.');
        });
    }

    function startTypingIndicator() {
        // Update status
        statusElement.textContent = 'está escribiendo...';
        statusElement.classList.add('typing');
        
        var typingIndicator = document.createElement('div');
        typingIndicator.className = 'message-wrapper ai';
        
        var typingBubble = document.createElement('div');
        typingBubble.className = 'typing-indicator';
        
        // Add assistant image
        var img = document.createElement('img');
        img.src = config.avatarPath;
        img.alt = 'Asistente';
        img.className = 'ai-icon';
        typingBubble.appendChild(img);
        
        // Add typing dots
        var dotsContainer = document.createElement('div');
        dotsContainer.className = 'dots';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dotsContainer.appendChild(dot);
        }
        
        typingBubble.appendChild(dotsContainer);
        typingIndicator.appendChild(typingBubble);
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function stopTypingIndicator() {
        // Update status back to online
        statusElement.textContent = 'en línea';
        statusElement.classList.remove('typing');
        
        // Remove typing indicators
        var typingIndicators = chatMessages.querySelectorAll('.typing-indicator');
        typingIndicators.forEach(function(indicator) {
            indicator.parentNode.remove();
        });
    }

    function addMessageToChat(sender, message) {
        var messageWrapper = document.createElement('div');
        messageWrapper.className = sender === 'Tú' ? 'message-wrapper user' : 'message-wrapper ai';

        var messageElement = document.createElement('div');
        messageElement.className = 'message-bubble';

        if (sender !== 'Tú') {
            // Add image for assistant
            var img = document.createElement('img');
            img.src = config.avatarPath;
            img.alt = 'Asistente';
            img.className = 'ai-icon';
            messageElement.appendChild(img);
        }

        var messageText = document.createElement('div');
        messageText.className = 'message-text';
        
        // Use marked library if available for Markdown parsing
        if (window.marked) {
            messageText.innerHTML = marked.parse(message);
        } else {
            messageText.textContent = message;
        }
        
        messageElement.appendChild(messageText);
        messageWrapper.appendChild(messageElement);
        chatMessages.appendChild(messageWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
})(); 
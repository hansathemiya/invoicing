// js/auth.js

// Handle Login Submission
async function handleLogin(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email.trim(),
    password: password
  });

  if (error) {
    showNotification(error.message, 'error');
    return null;
  }

  showNotification('Login successful! Redirecting...', 'success');
  // Redirect to Dashboard (we will create this next)
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1000);
  
  return data;
}

// Handle Signup Submission
async function handleSignup(email, password, businessName) {
  const { data, error } = await supabaseClient.auth.signUp({
    email: email.trim(),
    password: password,
    options: {
      data: {
        business_name: businessName
      }
    }
  });

  if (error) {
    showNotification(error.message, 'error');
    return null;
  }

  showNotification('Account created! Please check your email to confirm.', 'success');
  return data;
}

// UI Helper: Show Notifications
function showNotification(message, type = 'info') {
  // Create notification element if it doesn't exist
  let notif = document.getElementById('notification-area');
  if (!notif) {
    notif = document.createElement('div');
    notif.id = 'notification-area';
    notif.className = 'fixed top-4 right-4 z-50 space-y-2';
    document.body.appendChild(notif);
  }

  const alert = document.createElement('div');
  const bgColor = type === 'error' ? 'bg-error text-on-error' : 'bg-primary text-on-primary';
  alert.className = `${bgColor} px-6 py-3 rounded-xl shadow-lg text-sm font-bold transform transition-all duration-300 translate-x-full opacity-0`;
  alert.textContent = message;
  
  notif.appendChild(alert);

  // Animate in
  requestAnimationFrame(() => {
    alert.classList.remove('translate-x-full', 'opacity-0');
  });

  // Remove after 4 seconds
  setTimeout(() => {
    alert.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => alert.remove(), 300);
  }, 4000);
}

// Check Auth State on Load
document.addEventListener('DOMContentLoaded', async () => {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    // If already logged in, go to dashboard
    window.location.href = 'dashboard.html';
  }
});

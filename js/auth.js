// js/auth.js

// Handle Login Submission
async function handleLogin(email, password) {
  const { data, error } = await window.supabaseClient.auth.signInWithPassword({
    email: email.trim(),
    password: password
  });

  if (error) {
    showNotification(error.message, 'error');
    return null;
  }

  showNotification('Login successful! Redirecting...', 'success');
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1000);
  
  return data;
}

// Handle Signup Submission
async function handleSignup(email, password, businessName) {
  const { data, error } = await window.supabaseClient.auth.signUp({
    email: email.trim(),
    password: password,
    options: {
      data: {  // ✅ Fixed: Added "data" property
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

  requestAnimationFrame(() => {
    alert.classList.remove('translate-x-full', 'opacity-0');
  });

  setTimeout(() => {
    alert.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => alert.remove(), 300);
  }, 4000);
}

// Check Auth State on Load
document.addEventListener('DOMContentLoaded', async () => {
  // Safe check: ensure supabaseClient exists first
  if (typeof window.supabaseClient === 'undefined') {
    console.warn('Supabase client not loaded yet, retrying...');
    setTimeout(() => checkAuth(), 500);
    return;
  }
  
  const {  { session } } = await window.supabaseClient.auth.getSession();
  if (session) {
    window.location.href = 'dashboard.html';
  }
});

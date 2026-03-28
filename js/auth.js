// js/auth.js - FINAL CLEAN VERSION

// Handle Login Submission
async function handleLogin(email, password) {
  try {
    const result = await window.supabaseClient.auth.signInWithPassword({
      email: email.trim(),
      password: password
    });

    if (result.error) throw result.error;

    showNotification('Login successful! Redirecting...', 'success');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
    
    return result.data;
  } catch (err) {
    showNotification(err.message || 'Login failed', 'error');
    console.error('Login error:', err);
    return null;
  }
}

// Handle Signup Submission
async function handleSignup(email, password, businessName) {
  try {
    const result = await window.supabaseClient.auth.signUp({
      email: email.trim(),
      password: password,
      options: {
        data: {
          business_name: businessName
        }
      }
    });

    if (result.error) throw result.error;

    showNotification('Account created! Please check your email to confirm.', 'success');
    return result.data;
  } catch (err) {
    showNotification(err.message || 'Signup failed', 'error');
    console.error('Signup error:', err);
    return null;
  }
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
async function checkAuth() {
  if (typeof window.supabaseClient === 'undefined') {
    console.warn('Supabase client not loaded, retrying in 500ms...');
    setTimeout(checkAuth, 500);
    return;
  }
  
  try {
    const result = await window.supabaseClient.auth.getSession();
    if (result.error) throw result.error;
    
    const session = result.data.session;
    
    if (session && window.location.href.includes('index.html')) {
      window.location.href = 'dashboard.html';
    }
  } catch (err) {
    console.error('Auth check error:', err);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
});

// ✅ Expose functions to window for inline script access
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.showNotification = showNotification;
window.checkAuth = checkAuth;

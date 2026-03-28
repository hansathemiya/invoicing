// js/auth.js - BULLETPROOF VERSION
// Line numbers added for verification

// 1: Handle Login Submission
// 2: async function handleLogin(email, password) {
// 3:   try {
// 4:     const result = await window.supabaseClient.auth.signInWithPassword({
// 5:       email: email.trim(),
// 6:       password: password
// 7:     });
// 8: 
// 9:     if (result.error) {
// 10:       throw result.error;
// 11:     }
// 12: 
// 13:     showNotification('Login successful! Redirecting...', 'success');
// 14:     setTimeout(function() {
// 15:       window.location.href = 'dashboard.html';
// 16:     }, 1000);
// 17:     
// 18:     return result.data;
// 19:   } catch (err) {
// 20:     showNotification(err.message || 'Login failed', 'error');
// 21:     console.error('Login error:', err);
// 22:     return null;
// 23:   }
// 24: }

async function handleLogin(email, password) {
  try {
    const result = await window.supabaseClient.auth.signInWithPassword({
      email: email.trim(),
      password: password
    });

    if (result.error) {
      throw result.error;
    }

    showNotification('Login successful! Redirecting...', 'success');
    setTimeout(function() {
      window.location.href = 'dashboard.html';
    }, 1000);
    
    return result.data;
  } catch (err) {
    showNotification(err.message || 'Login failed', 'error');
    console.error('Login error:', err);
    return null;
  }
}

// 25: Handle Signup Submission
// 26: async function handleSignup(email, password, businessName) {
// 27:   try {
// 28:     const result = await window.supabaseClient.auth.signUp({
// 29:       email: email.trim(),
// 30:       password: password,
// 31:       options: {
// 32:         data: {
// 33:           business_name: businessName
// 34:         }
// 35:       }
// 36:     });
// 37: 
// 38:     if (result.error) {
// 39:       throw result.error;
// 40:     }
// 41: 
// 42:     showNotification('Account created! Check email to confirm.', 'success');
// 43:     return result.data;
// 44:   } catch (err) {
// 45:     showNotification(err.message || 'Signup failed', 'error');
// 46:     console.error('Signup error:', err);
// 47:     return null;
// 48:   }
// 49: }

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

    if (result.error) {
      throw result.error;
    }

    showNotification('Account created! Check email to confirm.', 'success');
    return result.data;
  } catch (err) {
    showNotification(err.message || 'Signup failed', 'error');
    console.error('Signup error:', err);
    return null;
  }
}

// 50: UI Helper: Show Notifications
// 51: function showNotification(message, type) {
// 52:   if (!type) { type = 'info'; }
// 53:   
// 54:   var notif = document.getElementById('notification-area');
// 55:   if (!notif) {
// 56:     notif = document.createElement('div');
// 57:     notif.id = 'notification-area';
// 58:     notif.className = 'fixed top-4 right-4 z-50 space-y-2';
// 59:     document.body.appendChild(notif);
// 60:   }
// 61: 
// 62:   var alert = document.createElement('div');
// 63:   var bgColor = (type === 'error') ? 'bg-error text-on-error' : 'bg-primary text-on-primary';
// 64:   alert.className = bgColor + ' px-6 py-3 rounded-xl shadow-lg text-sm font-bold transform transition-all duration-300 translate-x-full opacity-0';
// 65:   alert.textContent = message;
// 66:   
// 67:   notif.appendChild(alert);
// 68: 
// 69:   requestAnimationFrame(function() {
// 70:     alert.classList.remove('translate-x-full', 'opacity-0');
// 71:   });
// 72: 
// 73:   setTimeout(function() {
// 74:     alert.classList.add('translate-x-full', 'opacity-0');
// 75:     setTimeout(function() { alert.remove(); }, 300);
// 76:   }, 4000);
// 77: }

function showNotification(message, type) {
  if (!type) { type = 'info'; }
  
  var notif = document.getElementById('notification-area');
  if (!notif) {
    notif = document.createElement('div');
    notif.id = 'notification-area';
    notif.className = 'fixed top-4 right-4 z-50 space-y-2';
    document.body.appendChild(notif);
  }

  var alert = document.createElement('div');
  var bgColor = (type === 'error') ? 'bg-error text-on-error' : 'bg-primary text-on-primary';
  alert.className = bgColor + ' px-6 py-3 rounded-xl shadow-lg text-sm font-bold transform transition-all duration-300 translate-x-full opacity-0';
  alert.textContent = message;
  
  notif.appendChild(alert);

  requestAnimationFrame(function() {
    alert.classList.remove('translate-x-full', 'opacity-0');
  });

  setTimeout(function() {
    alert.classList.add('translate-x-full', 'opacity-0');
    setTimeout(function() { alert.remove(); }, 300);
  }, 4000);
}

// 78: Check Auth State on Load
// 79: async function checkAuth() {
// 80:   if (typeof window.supabaseClient === 'undefined') {
// 81:     console.warn('Supabase client not loaded, retrying...');
// 82:     setTimeout(checkAuth, 500);
// 83:     return;
// 84:   }
// 85:   
// 86:   try {
// 87:     const result = await window.supabaseClient.auth.getSession();
// 88:     if (result.error) { throw result.error; }
// 89:     
// 90:     const session = result.data.session;
// 91:     
// 92:     if (session && window.location.href.includes('index.html')) {
// 93:       window.location.href = 'dashboard.html';
// 94:     }
// 95:   } catch (err) {
// 96:     console.error('Auth check error:', err);
// 97:   }
// 98: }

async function checkAuth() {
  if (typeof window.supabaseClient === 'undefined') {
    console.warn('Supabase client not loaded, retrying...');
    setTimeout(checkAuth, 500);
    return;
  }
  
  try {
    const result = await window.supabaseClient.auth.getSession();
    if (result.error) { throw result.error; }
    
    const session = result.data.session;
    
    if (session && window.location.href.includes('index.html')) {
      window.location.href = 'dashboard.html';
    }
  } catch (err) {
    console.error('Auth check error:', err);
  }
}

// 99: Initialize on DOM load
// 100: document.addEventListener('DOMContentLoaded', function() {
// 101:   checkAuth();
// 102: });

document.addEventListener('DOMContentLoaded', function() {
  checkAuth();
});

// 103: Expose functions to window for inline script access
// 104: window.handleLogin = handleLogin;
// 105: window.handleSignup = handleSignup;
// 106: window.showNotification = showNotification;
// 107: window.checkAuth = checkAuth;

window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.showNotification = showNotification;
window.checkAuth = checkAuth;

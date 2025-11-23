import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Google login successful:', tokenResponse);
      // TODO: Send token to your backend for verification
      // For now, navigate to the main app
      navigate('/app/donnees-marche');
    },
    onError: (error) => {
      console.error('Google login failed:', error);
      alert('La connexion avec Google a échoué. Veuillez réessayer.');
    },
  });

  const handleFacebookLogin = () => {
    // TODO: Implement Facebook OAuth login
    console.log('Facebook login clicked');
    // For now, just navigate to the main app
    navigate('/app/donnees-marche');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Header */}
      <div style={{
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'white',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: '500',
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: '700'
        }}>
          <img src="/daralouer-icon.png" alt="DaraLouer" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
          DaraLouer
        </Link>
      </div>

      {/* Login Form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
      <div className="card" style={{
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            DaraLouer
          </h1>
          <p className="text-gray-600">
            Connectez-vous pour accéder à votre compte
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <button
            onClick={() => handleGoogleLogin()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.875rem 1rem',
              border: '1px solid var(--gray-300)',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gray-50)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8055 10.2292C19.8055 9.55056 19.7499 8.86667 19.6305 8.19873H10.2002V12.0492H15.6014C15.3773 13.2911 14.6571 14.3898 13.6025 15.0879V17.5866H16.8251C18.7173 15.8449 19.8055 13.2728 19.8055 10.2292Z" fill="#4285F4"/>
              <path d="M10.2002 20.0006C12.9515 20.0006 15.2695 19.1151 16.8288 17.5865L13.6062 15.0879C12.7079 15.6979 11.5569 16.0433 10.2039 16.0433C7.54356 16.0433 5.2893 14.2832 4.50601 11.9165H1.18237V14.4922C2.77642 17.8094 6.31514 20.0006 10.2002 20.0006Z" fill="#34A853"/>
              <path d="M4.50253 11.9162C4.03662 10.6743 4.03662 9.3302 4.50253 8.08828V5.51257H1.18263C-0.394211 8.51618 -0.394211 12.4879 1.18263 15.4915L4.50253 11.9162Z" fill="#FBBC04"/>
              <path d="M10.2002 3.95805C11.6246 3.936 13.0009 4.47247 14.0377 5.45722L16.8844 2.60218C15.1768 0.990869 12.9257 0.0808105 10.2002 0.106644C6.31514 0.106644 2.77642 2.29778 1.18237 5.61548L4.50227 8.19119C5.28182 5.82025 7.54009 3.95805 10.2002 3.95805Z" fill="#EA4335"/>
            </svg>
            Continuer avec Google
          </button>

          <button
            onClick={handleFacebookLogin}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.875rem 1rem',
              border: 'none',
              borderRadius: '0.5rem',
              backgroundColor: '#1877F2',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#166FE5';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1877F2';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"/>
            </svg>
            Continuer avec Facebook
          </button>
        </div>

        <div style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--gray-200)'
        }}>
          <p className="text-sm text-gray-500">
            En vous connectant, vous acceptez nos{' '}
            <a href="#" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              conditions d'utilisation
            </a>
            {' '}et notre{' '}
            <a href="#" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              politique de confidentialité
            </a>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;

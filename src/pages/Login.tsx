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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-white no-underline text-sm font-medium transition-opacity hover:opacity-80"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <Link to="/" className="flex items-center gap-3 text-white no-underline text-xl font-bold">
          <img src="/daralouer-icon.png" alt="DaraLouer" className="w-6 h-6 object-contain" />
          DaraLouer
        </Link>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="card max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">
              DaraLouer
            </h1>
            <p className="text-gray-600">
              Connectez-vous pour accéder à votre compte
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleGoogleLogin()}
              className="flex items-center justify-center gap-3 w-full px-4 py-3.5 border border-gray-300 rounded-lg bg-white text-base font-medium transition-all cursor-pointer hover:bg-gray-50 hover:shadow-md"
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
            className="flex items-center justify-center gap-3 w-full px-4 py-3.5 border-none rounded-lg bg-[#1877F2] text-white text-base font-medium transition-all cursor-pointer hover:bg-[#166FE5] hover:shadow-md"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"/>
            </svg>
            Continuer avec Facebook
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            En vous connectant, vous acceptez nos{' '}
            <a href="#" className="text-blue-600 underline">
              conditions d'utilisation
            </a>
            {' '}et notre{' '}
            <a href="#" className="text-blue-600 underline">
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

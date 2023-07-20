import Navbar from './navbar';
import Home from './Home';
import Membres from './Membres';
import Livre from './Livre';
import Reunion from './Reunion';
import Vote from './Vote';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Rediscover your passion for reading',
        homeText: 'On the first Thursday of every month, find us in the reading corner of your local Ottawa Public Library branch.',
        vote: 'Vote on next month\'s book right now!',
        membres: 'Membres Centre',
        livre: 'Book of the Month',
        reunion: 'Meetings',
        explore: 'Explore our selection',
        genre: 'Filter by Genre',
        author: 'Filter by Author',
        all: 'All',
        abio: 'Autobiography',
        shelp: 'Self-Help',
        fantasy: 'Fantasy',
        funny: 'Humour',
        email: 'Email',
        desc: '"What we should know about the people we don\'t"',
        pdf: 'Download the PDF',
        paper: 'Reserve a hard copy',
        audio: 'Download the audiobook',
        download: ' Download',
        reserve: ' Reserve',
        error: 'This is a website for a school project. I cannot actually provide you with a free copy of this book.',
        branch: 'My branch:',
        alire: 'Current read:',
        dejalu: 'Previously read:',
        nxtmeet: 'Next Meeting:',
        thrs: 'Thursday, August 3rd 2023',
        time: '5:30pm to 7pm',
        zoom: 'Join us on Zoom',
        find: 'Find my local branch:',
        select: 'Select a branch...',
        login: 'Login',
        logout: 'Logout',
        loggedOut: 'Logged out...',
        incorrect: 'Incorrect username or password',
        user: 'Username',
        pass: 'Password',
        close: 'Close',
        rTitle: 'Reserve a book',
        rBody: 'Your copy is available for pickup at the Blackburn branch!',
        reserved: 'You have already reserved a copy',
        vrec: 'Vote received',
        vone: 'You only get one vote',
      }
    },
    fr: {
      translation: {
        welcome: 'Redécouvrez votre passion pour la lecture',
        homeText: 'Le premier jeudi du mois, trouvez-nous dans le coin de lecture de votre succursale de la Bibliothèque publique d\'Ottawa.',
        vote: 'Votez sur le prochain livre du mois dès maintenant!',
        membres: 'Centre des Membres',
        livre: 'Livre du Mois',
        reunion: 'Réunions',
        explore: 'Explorez notre sélection',
        genre: 'Filtrer par Genre',
        author: 'Filtrer par Auteur',
        all: 'Tous',
        abio: 'Autobiographie',
        shelp: 'Bien-Être',
        fantasy: 'Fantaisie',
        funny: 'Livres Humoristiques',
        email: 'Courriel',
        desc: '"Ce qu\'on devrait connaître au sujet de ceux que nous ne connaissons pas"',
        pdf: 'Télécharger le PDF',
        paper: 'Réserver une copie physique',
        audio: 'Télécharger le livre audio',
        download: ' Télécharger',
        reserve: ' Réserver',
        error: 'Ceci est un site web pour un project d\'école. Je ne peux pas vous donner un exemplaire gratuit de ce livre.',
        branch: 'Ma succursale:',
        alire: 'À lire:',
        dejalu: 'Déja lu:',
        nxtmeet: 'Prochaine Réunion:',
        thrs: 'jeudi le 3 août 2023',
        time: '17h30 à 19h',
        zoom: 'Rejoindre sur Zoom',
        find: 'Trouver ma succursale:',
        select: 'Choisir une succursale...',
        login: 'Connexion',
        logout: 'Déconnexion',
        loggedOut: 'Déconnexion...',
        incorrect: 'Mauvais nom d\'utilisateur ou mot de passe...',
        user: 'Nom d\'utilisateur',
        pass: 'Mot de passe',
        close: 'Fermer',
        rTitle: 'Réserver un livre',
        rBody: 'Votre copie est disponible à la succursale Blackburn!',
        reserved: 'Vous avez déja réservé ce livre',
        vrec: 'Votre vote a été reçu',
        vone: 'Vous ne pouvez voter qu\'une fois',
      }
    }
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});


function App() {

  return (
    <I18nextProvider>
      <Router>
        <div className="App">
            <Navbar/>
            <div className="content">
              <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/membres' element={<Membres />}/>
                <Route path='/livre-du-mois' element={<Livre />}/>
                <Route path='/reunion' element={<Reunion />}/>
                <Route path='/vote' element={<Vote />}/>
              </Routes>
            </div>
            <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;

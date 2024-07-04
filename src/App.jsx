import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './containers/home/home.jsx';
import Blog from './containers/blog/blog.jsx';
import Contacts from './containers/contacts/contacts.jsx';
import AddArticle from './containers/add-article/add-article.jsx';
import ArticleDetails from './containers/article-details/article-details.jsx';
import NotFound from './containers/not-found/not-found.jsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article-add" element={<AddArticle />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;

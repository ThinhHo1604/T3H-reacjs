import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const DefaultLayout = (props) => {
	return (
		<>
			<Navigation />
			<Header />

			{props.children}

			<Footer />
		</>
	);
};

export default DefaultLayout;

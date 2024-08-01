import {Helmet} from "react-helmet";
import ComicsList from "../comics-list/comics-list";
import AppBanner from '../app-banner/app-banner';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comics page</title>
            </Helmet>
            <AppBanner />
            <ComicsList />
        </>
    )
}

export default ComicsPage;
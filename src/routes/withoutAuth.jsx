import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// layouts
import WithNav from '../layout/WithNav';
import AdministratorLayout from "../layout/AdministratorLayout";

/* ---- components ----- */
// contact
import Contact from '../components/Contact/Contact';

// home and caraousel
import Home from '../components/Home/Home';
import Carousel from "../components/Carousel/Carousel";

/* About*/
// excise
import AboutExciseIntroduction from '../components/About/Excise/Introduction/AboutExciseIntroduction';
import AboutExciseOrganisationSetup from '../components/About/Excise/OrganisationSetup/AboutExciseOrganisationSetup';

// rsbcl
import AboutrsbclDirectors from '../components/About/RSBCL/Directors/AboutrsbclDirectors';
import AboutrsbclIntroduction from '../components/About/RSBCL/Introduction/AboutrsbclIntroduction';
import AboutrsbclMenorandum from '../components/About/RSBCL/Memorandum/AboutrsbclMenorandum';
import AboutrsbclOrganisation from "../components/About/RSBCL/OrganisationSetup/AboutrsbclOrganisation";

// rsgsm
import Aboutrsgsm from '../components/About/RSGSM/Aboutrsgsm';

/* Directory */
// excise
import DirectoryExciseOffice from '../components/Directory/Excise/Office/DirectoryExciseOffice';

// rsbcl
import DirectoryrsbclDepots from '../components/Directory/RSBCL/Depots/DirectoryrsbclDepots';
import DirectoryrsbclOffice from '../components/Directory/RSBCL/Office/DirectoryrsbclOffice';

// rsgsm
import DirectoryrsgsmOffice from '../components/Directory/RSGSM/HeadOffice/DirectoryrsgsmOffice';
import DirectoryrsgsmReduction from '../components/Directory/RSGSM/ReductionCenter/DirectoryrsgsmReduction';
import DirectoryrsgsmSugarmill from '../components/Directory/RSGSM/SugarMill/DirectoryrsgsmSugarmill';

// Administrative Report
import AdministrativeReport from '../components/AdministrativeReport/AdministrativeReport';
import Error404 from '../Error/Error404/Error404';
import Login from '../components/AuthForms/Login/Login';
import SinglePage from '../layout/SinglePage';
import Forget from '../components/AuthForms/Forget/Forget';
import Reset from '../components/AuthForms/Reset/Reset';
import Signup from '../components/AuthForms/Signup/Signup';
import FullPage from '../authenticated/FullPage';

// creating routes
export const withoutAuthRoute = createBrowserRouter([{
    path: "/",
    element: <WithNav />,
    children: [
        // Home 
        {
            path: "",
            element: <>
                <Carousel />
                <Home />
            </>
        },

        // contact
        {
            path: "contact",
            element: <Contact />
        },

        /** About  */
        // excise
        {
            path: "about-excise-introduction",
            element: <AboutExciseIntroduction />
        }, {
            path: "about-excise-organization",
            element: <AboutExciseOrganisationSetup />
        },

        // about RSBCL
        {
            path: "about-rsbcl-introduction",
            element: <AboutrsbclIntroduction />
        },
        {
            path: "about-rsbcl-directors",
            element: <AboutrsbclDirectors />
        },
        {
            path: "about-rsbcl-organization",
            element: <AboutrsbclOrganisation />
        },
        {
            path: "about-rsbcl-memorandom",
            element: <AboutrsbclMenorandum />
        },

        // about RSGSM
        {
            path: "about-rsgsm",
            element: <Aboutrsgsm />
        },

        /** Directory */
        // excise
        {
            path: "directory-excise/:offices",
            element: <DirectoryExciseOffice />
        },

        // directory rsgsm
        // directory rsgsm head office
        {
            path: "directory-rsgsm-office",
            element: <DirectoryrsgsmOffice />
        },

        // directory rsgsm depots
        // {
        //     path: "directory-rsgsm-depots",
        //     element: 
        // },

        // directory rsgsm reduction center
        {
            path: "directory-rsgsm-reduction-center",
            element: <DirectoryrsgsmReduction />
        },

        // directory rsgsm sugar mill
        {
            path: "directory-rsgsm-sugar-mill",
            element: <DirectoryrsgsmSugarmill />
        },

        // directory rsbcl
        // directory rsbcl depots
        {
            path: "directory-rsbcl-depots",
            element: <DirectoryrsbclDepots />
        },

        // directory rsbcl depots
        {
            path: "directory-rsbcl-head-office",
            element: <DirectoryrsbclOffice />
        }
    ]
}, {
    path: "administrative-report",
    element: <AdministratorLayout />,
    children: [
        {
            path: "",
            element: <AdministrativeReport />
        }
    ]
}, {
    path: "*",
    element: <Error404 />
},

// all authenticated or private route 
{
    path: "/auth/",
    element: <SinglePage />,
    children: [
        {
            path: "login",
            element: <Login />
        }, {
            path: "forget",
            element: <Forget />
        }, {
            path: "reset",
            element: <Reset />
        }, {
            path: "new-account",
            element: <Signup />
        }, {
            path: "dashboard",
            element: <FullPage />
        }
    ]
}
])
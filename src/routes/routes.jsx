import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// layouts
import WithNav from '../layout/WithNav';
import AdministratorLayout from "../layout/AdministratorLayout";
import SidebarLayout from "../layout/SidebarLayout"
import SinglePage from '../layout/SinglePage';

/* ---- components ----- */
// contact
import Contact from '../components/Contact/Contact';

// mobile apps
import MobileApplications from '../components/MobileApp/MobileApplications';

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

// Error 404
import Error404 from '../Error/Error404/Error404';

// authentication pages
import Login from '../components/AuthForms/Login/Login';
import Forget from '../components/AuthForms/Forget/Forget';
import Reset from '../components/AuthForms/Reset/Reset';

import Signup from '../components/AuthForms/Signup/Signup';

import Dashboard from '../authenticated/components/Dashboard/Dashboard';
import Sales from '../authenticated/components/Sales/Sales';
import Revenue from '../authenticated/components/Revenue/Revenue';
import Requirement from '../authenticated/components/Requirement/Requirement';
import MobileApp from '../authenticated/components/MobileApp/MobileApp';
import Employee from '../authenticated/components/Employee/Employee';
import ContactPage from '../authenticated/components/ContactUs/ContactPage';
import DirectoryPage from '../authenticated/components/Directory/DirectoryPage';
import MobileAppAdd from '../authenticated/components/MobileApp/MobileAppAdd';
import MobileAppUpdate from '../authenticated/components/MobileApp/MobileAppUpdate';
import ContainerLayout from '../layout/ContainerLayout';
import EmployeeUpdate from '../authenticated/components/Employee/EmployeeUpdate';
import EmployeeAdd from "../authenticated/components/Employee/EmployeeAdd";
import EmployeeDetails from '../authenticated/components/Employee/EmployeeDetails';
import News from '../authenticated/components/NewsActsFocus/News/News';
import NewsAdd from '../authenticated/components/NewsActsFocus/News/NewsAdd/NewsAdd';
import NewsUpdate from '../authenticated/components/NewsActsFocus/News/NewsUpdate/NewsUpdate';
import NewsView from '../authenticated/components/NewsActsFocus/News/NewsView/NewsView';
import ViewTableNewsActs from '../components/Home/Common/ViewTableNewsActs';
import AnalyticDashboard from '../components/AnalyticDashboard/AnalyticDashboard';

//service
import ServiceProvidersAuthenticated from '../authenticated/components/ServiceProviders/ServiceProvidersAuthenticated';
import ServiceProvidersAuthenticatedViews from '../authenticated/components/ServiceProviders/ServiceProvidersAuthenticatedViews';
import ServiceProvidersAuthenticatedUpdate from '../authenticated/components/ServiceProviders/ServiceProvidersAuthenticatedUpdate';
import ServiceProvidersAuthenticatedAdd from '../authenticated/components/ServiceProviders/ServiceProvidersAuthenticatedAdd';

// acts
import Acts from '../authenticated/components/NewsActsFocus/Acts/Acts';
import ActsAdd from '../authenticated/components/NewsActsFocus/Acts/ActsAdd';
import ActsUpdate from '../authenticated/components/NewsActsFocus/Acts/ActsUpdate';

// focus
import Focus from '../authenticated/components/NewsActsFocus/Focus/Focus';
import FocusAdd from '../authenticated/components/NewsActsFocus/Focus/FocusAdd';
import FocusUpdate from '../authenticated/components/NewsActsFocus/Focus/FocusUpdate';

// directory excise head office
import ExciseHeadOffice from '../authenticated/components/Directory/Excise/HeadOffice/ExciseHeadOffice';
import ExciseHeadOfficeAdd from '../authenticated/components/Directory/Excise/HeadOffice/ExciseHeadOfficeAdd';
import ExciseHeadOfficeUpdate from '../authenticated/components/Directory/Excise/HeadOffice/ExciseHeadOfficeUpdate';

// directory rsbcl head office
import RSBCLHeadOffice from "../authenticated/components/Directory/RSBCL/HeadOffice/RSBCLHeadOffice"
import RSBCLHeadOfficeUpdate from "../authenticated/components/Directory/RSBCL/HeadOffice/RSBCLHeadOfficeUpdate"
import RSBCLHeadOfficeAdd from "../authenticated/components/Directory/RSBCL/HeadOffice/RSBCLHeadOfficeAdd"

// directory rsbcl depots
import RSBCLDepots from "../authenticated/components/Directory/RSBCL/Depots/RSBCLDepots"
import RSBCLDepotsAdd from "../authenticated/components/Directory/RSBCL/Depots/RSBCLDepotsAdd"
import RSBCLDepotsUpdate from "../authenticated/components/Directory/RSBCL/Depots/RSBCLDepotsUpdate"

// directory rsgsm depots
import RsgsmDepots from "../authenticated/components/Directory/RSGSM/Depots/RsgsmDepots"
import RsgsmDepotsAdd from "../authenticated/components/Directory/RSGSM/Depots/RsgsmDepotsAdd"
import RsgsmDepotsUpdate from "../authenticated/components/Directory/RSGSM/Depots/RsgsmDepotsUpdate"

// directory rsgsm reduction center
import RsgsmReductionCenter from "../authenticated/components/Directory/RSGSM/ReductionCenter/RsgsmReductionCenter"
import RsgsmReductionCenterAdd from "../authenticated/components/Directory/RSGSM/ReductionCenter/RsgsmReductionCenterAdd"
import RsgsmReductionCenterUpdate from "../authenticated/components/Directory/RSGSM/ReductionCenter/RsgsmReductionCenterUpdate"

//  checking authentication using local storage
const isAuthenticated = () => {
    // Replace this with your actual authentication logic
    return localStorage.getItem('authToken') !== null;
};

const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/auth/login" />;
};

// creating routes
export const routes = createBrowserRouter(
    [
        {
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
                // news
                {
                    path: "/news",
                    element: <ViewTableNewsActs />
                },
                // acts
                {
                    path: "/acts",
                    element: <ViewTableNewsActs />
                },
                // acts
                {
                    path: "/analytic-dashboard",
                    element: <AnalyticDashboard />
                },

                // contact
                {
                    path: "contact",
                    element: <Contact />
                },
                // mobile applications
                {
                    path: "mobile-applications",
                    element: <MobileApplications />
                },
                /** About  */
                // excise
                {
                    path: "about-excise-introduction",
                    element: <AboutExciseIntroduction />
                },
                {
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
        },
        {
            path: "administrative-report",
            element: <AdministratorLayout />,
            children: [
                {
                    path: "",
                    element: <AdministrativeReport />
                }
            ]
        },
        {
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
                }
            ]
        },

        {
            path: "/authenticated/",
            element: <SidebarLayout />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />
                },
                {
                    path: "sales",
                    element: <Sales />
                },
                {
                    path: "revenue",
                    element: <Revenue />
                },

                // reuirement
                {
                    path: "requirement",
                    element: <Requirement />
                },

                // mobile apps
                {
                    path: "mobile-app",
                    // element: <MobileApp />,
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <MobileApp />
                        },
                        {
                            path: "add",
                            element: <MobileAppAdd />
                        },
                        {
                            path: "edit/id/:id",
                            element: <MobileAppUpdate />
                        }
                    ]
                },

                // employees
                {
                    path: "employee",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <Employee />
                        },
                        {
                            path: "add",
                            element: <EmployeeAdd />
                        },
                        {
                            path: "details/id/:id",
                            element: <EmployeeDetails />
                        },
                        {
                            path: "edit/id/:id",
                            element: <EmployeeUpdate />
                        },
                    ]
                },

                // news
                {
                    path: "news",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <News />
                        },
                        {
                            path: "add",
                            element: <NewsAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <NewsUpdate />
                        }, {
                            path: "view/id/:id",
                            element: <NewsView />
                        }
                    ]
                },

                // acts
                {
                    path: "acts",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <Acts />
                        },
                        {
                            path: "add",
                            element: <ActsAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <ActsUpdate />
                        }
                    ]
                },

                // directory
                // directory excise-office
                {
                    path: "directory-excise-head-office",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <ExciseHeadOffice />
                        },
                        {
                            path: "add",
                            element: <ExciseHeadOfficeAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <ExciseHeadOfficeUpdate />
                        }
                    ]
                },

                // directory rsbcl depots
                {
                    path: "directory-rsbcl-depots",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <RSBCLDepots />
                        },
                        {
                            path: "add",
                            element: <RSBCLDepotsAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <RSBCLDepotsUpdate />
                        }
                    ]
                },

                // directory rsbcl head ofice
                {
                    path: "directory-rsbcl-head-office",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <RSBCLHeadOffice />
                        },
                        {
                            path: "add",
                            element: <RSBCLHeadOfficeAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <RSBCLHeadOfficeUpdate />
                        }
                    ]
                },

                // directory rsgsm depots
                {
                    path: "directory-rsgsm-depots",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <RsgsmDepots />
                        },
                        {
                            path: "add",
                            element: <RsgsmDepotsAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <RsgsmDepotsUpdate />
                        }
                    ]
                },

                // directory rsbcl reduction center
                {
                    path: "directory-rsgsm-reduction-center",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <RsgsmReductionCenter />
                        },
                        {
                            path: "add",
                            element: <RsgsmReductionCenterAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <RsgsmReductionCenterUpdate />
                        }
                    ]
                },

                // focus
                {
                    path: "focus",
                    element: <ContainerLayout />,
                    children: [
                        {
                            path: "",
                            element: <Focus />
                        },
                        {
                            path: "add",
                            element: <FocusAdd />
                        },
                        {
                            path: "update/id/:id",
                            element: <FocusUpdate />
                        }
                    ]
                },

                // services
                {
                    path: "services",
                    element: <ContainerLayout />,
                    children: [{
                        path: "",
                        element: <ServiceProvidersAuthenticated />
                    }, {
                        path: "add",
                        element: <ServiceProvidersAuthenticatedAdd />
                    }, {
                        path: "edit/id/:id",
                        element: <ServiceProvidersAuthenticatedUpdate />
                    }, {
                        path: "view/id/:id",
                        element: <ServiceProvidersAuthenticatedViews />
                    }
                    ]
                },

                // contact
                {
                    path: "contact",
                    element: <ContactPage />
                },

                // directory
                {
                    path: "directory",
                    element: <DirectoryPage />
                },

                // Error 404
                {
                    path: "*",
                    element: <Error404 />
                }
            ]
        }
    ])
import React, { useState } from 'react'
import Avatar from './components/Avatar/Avatar';
import Header from './components/Header/Header';

const FullPage = () => {

    const [activeContainer, setActiveContainer] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [salesOption, setsalesOption] = useState(false);

    const [department, setDepartment] = useState("excise")
    return (
        <div className="flex flex-col md:flex-row h-full bg-slate-100 no-scrollbar overflow-y-auto">
            <div>
                {/* Mobile menu button */}
                <div className="md:hidden p-2">
                    <div className='flex justify-between'>
                        <button onClick={toggleSidebar} className="text-gray-700 dark:text-slate-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div>
                            {/* profile */}
                            <Avatar />
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className={`relative ${isOpen ? 'block' : 'hidden'} md:flex flex-col bg-white bg-clip-border h-full dark:bg-slate-900 dark:border-r-slate-500 p-3 text-gray-700 transition-transform md:transform-none`}>
                    <div className="py-1">
                        <h5 className="block px-3 font-sans text-slate-900 dark:text-white text-xl antialiased font-semibold tracking-normal text-blue-gray-900 capitalize">
                            {department}
                        </h5>
                    </div>

                    <nav className="flex flex-col font-sans text-base font-normal text-blue-gray-700">
                        <div className="overflow-hidden">
                            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">

                                <div
                                    className="flex min-w-[240px] flex-col gap-y-2 px-1 py-2 font-sans text-base font-normal text-blue-gray-700">
                                    {/* revenue button  */}
                                    <div className='w-full '>
                                        <button type="button" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-md shadow text-base px-5 py-2">
                                            <div className='flex gap-x-4 items-center'>
                                                <div>
                                                    <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                                                    </svg>
                                                </div>
                                                <div>Dashboard</div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* sales button */}
                                    <div className='w-full '>
                                        <button type="button" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-md shadow text-base px-5 py-2">
                                            <div className='flex justify-between items-center'>
                                                <div className='flex gap-x-4 items-center'>
                                                    <div>
                                                        <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                                                        </svg>
                                                    </div>
                                                    <div>Sales</div>
                                                </div>
                                                {/* <div>
                                                    <svg className="w-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7" />
                                                    </svg>
                                                </div> */}
                                            </div>
                                        </button>
                                    </div>
                                    {/* 
                                    {
                                        salesOption &&
                                        <div className='flex justify-between items-center'>
                                            <button type="button" onClick={() => setActiveContainer(1)} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm px-5 py-2 text-center">BL</button>
                                            <button type="button" onClick={() => setActiveContainer(2)} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm px-5 py-2 text-center">CASE</button>
                                            <button type="button" onClick={() => setActiveContainer(3)} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm px-5 py-2 text-center">DUTY</button>
                                        </div>
                                    } */}

                                    {/* revenue button  */}
                                    <div className='w-full '>
                                        <button type="button" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-md shadow text-base px-5 py-2">
                                            <div className='flex gap-x-4 items-center'>
                                                <div>
                                                    <svg className="w-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                                    </svg>
                                                </div>
                                                <div>Revenue</div>
                                            </div>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>                       
                    </nav>
                </div>
            </div>

            <div className=' dark:bg-slate-900 bg-slate-200 w-full overflow-auto text-black dark:text-white'>
                <div className='py-2 items-center w-full bg-white justify-end hidden md:flex'>
                    <Header />

                </div>
                <div className='p-3'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed ratione quas veniam magnam quod illo natus fuga libero, aut officia ut quaerat, nam suscipit debitis voluptate ipsum iusto saepe soluta. Adipisci cumque possimus est voluptate sunt provident quod, ad vel eos atque non aliquam, iste nam fugiat rerum repellat magnam hic maiores dolorum? Necessitatibus repellat quisquam mollitia rerum nostrum nulla ratione excepturi neque voluptate, unde blanditiis veniam laudantium quia natus vero aspernatur cum numquam dolor, tempora eius! Accusantium placeat in quaerat. Nesciunt ipsum tenetur debitis vero recusandae deserunt iure illo odit fugiat et adipisci iste fuga voluptatum hic vitae doloribus libero nihil earum consectetur voluptas magni facilis, blanditiis ratione. Asperiores earum, laudantium, sapiente numquam a, culpa consequatur beatae incidunt qui est placeat! Quisquam accusamus soluta molestiae, est debitis fugiat itaque facilis sequi atque ex cupiditate, cum laudantium aliquid, hic perferendis quos neque repellendus incidunt iste facere expedita amet. Tenetur exercitationem totam explicabo accusamus? Ullam asperiores incidunt pariatur optio quibusdam aut, cum libero earum voluptatum architecto deleniti blanditiis consequatur provident excepturi assumenda enim quaerat nesciunt, laudantium at beatae harum accusantium, sint repudiandae! Omnis culpa ea tempora quod voluptatibus doloribus nemo sequi asperiores eaque? Blanditiis at quidem ad modi dicta iusto nam neque facilis fugit, maiores suscipit sit sed? Iste illo nesciunt delectus, ipsum quisquam, itaque dolore ipsam harum rerum, molestiae veritatis repellat eius numquam provident perferendis beatae amet labore porro nisi tempore? Odio, distinctio enim dolores nobis fugit, illo fugiat delectus animi cupiditate ab voluptatum quia porro nihil sed, incidunt quas nam tempora harum sunt vero laboriosam magnam! Omnis dicta vel nostrum, enim, quaerat harum dolorum quae culpa doloribus laudantium adipisci officiis temporibus similique eos est, veritatis repellendus impedit recusandae! Facilis commodi labore cupiditate fugit dolorem deleniti, ratione placeat necessitatibus assumenda quia, ut nulla? Quae sapiente consequatur veniam quas incidunt ex perspiciatis nisi dignissimos doloribus deleniti ad dolorum eum, porro optio eveniet voluptas ut exercitationem vel a! Incidunt, deserunt. Minus quo accusamus numquam facilis voluptatibus. Doloremque quis reiciendis beatae, laboriosam modi eius, nesciunt quaerat esse odio eos quia, aspernatur magni tenetur molestias at quae sit qui laudantium sequi maiores alias? Qui ipsa minus culpa praesentium. Minima laboriosam repellat et sed, officia facere placeat? Molestias quia aut in dolore excepturi totam officiis quos, quasi repellat consequatur illum, aliquam eveniet, quidem distinctio recusandae debitis cum corrupti soluta doloribus vitae placeat adipisci esse? Ad fuga aspernatur soluta, delectus, consequatur nesciunt, asperiores labore eius quas molestias dicta ullam. Blanditiis maxime totam, obcaecati, eum provident modi laboriosam dolore nihil quasi tempore, temporibus mollitia tenetur voluptatum quidem quam dignissimos! Ullam ad aperiam, quibusdam accusantium, numquam hic doloribus commodi adipisci, velit voluptatum rem est? Earum dolor nobis assumenda minima dolores officia accusantium magni exercitationem. Est minima saepe voluptatibus id quod laboriosam temporibus odit reiciendis, velit, sit aliquam voluptatum ducimus inventore nemo consequatur hic magnam accusantium tempore totam cumque. Quod libero doloribus dicta ex natus a eligendi quasi praesentium illo numquam aperiam nesciunt laborum ipsa aliquam eveniet, eos odio fuga! Corrupti facilis consequuntur hic ut consequatur accusantium fuga? Possimus praesentium ducimus tempora ipsum. Iusto odit nulla delectus, itaque mollitia quam deserunt veniam, quae saepe ipsum aliquid sint nam esse in dicta cupiditate tempore officiis voluptatibus laborum neque fugit molestias? Ab quisquam, ea fugit dicta commodi odio ducimus doloribus vero cum, accusamus corporis quasi sed nostrum dolor eveniet blanditiis, enim nam nemo sint deleniti nihil. Enim odio reiciendis quasi eos perspiciatis quod, at eius illum veritatis exercitationem laborum alias error facere accusamus quibusdam commodi fugit velit inventore, nobis libero! Nesciunt ipsam magni non repellendus adipisci, deserunt perferendis? Magnam voluptates aliquid commodi laudantium provident soluta sit quo quisquam voluptatibus nemo suscipit culpa voluptatum consequatur temporibus libero iure, explicabo modi cum? Corporis ea vero, eligendi dolore at, provident exercitationem hic placeat molestias expedita a temporibus officiis, molestiae harum sit quas? Inventore tempora impedit, illum nesciunt ipsa ab quae labore aspernatur aliquam, nisi incidunt magni libero voluptate dolorum! Assumenda, cupiditate iusto atque iure provident alias voluptate! Soluta exercitationem iusto, quibusdam tempore laudantium vitae possimus nulla qui amet nesciunt quia vero voluptate. Possimus consequuntur atque cupiditate voluptates ipsa voluptatem odio, reiciendis, recusandae nam nostrum, assumenda aliquam excepturi ad eos unde veritatis dolore dicta temporibus debitis quaerat qui. Ab corporis magni fugiat aliquid impedit adipisci repudiandae beatae ducimus qui consequatur? Illo distinctio architecto maiores excepturi consequuntur quidem modi eius quaerat, natus consectetur vero voluptatibus minima iusto, odio, quo veritatis. Assumenda quasi perferendis reprehenderit possimus nobis esse est neque ducimus libero temporibus necessitatibus voluptates maiores, aliquid quae eaque eius doloremque accusantium earum quas eos placeat nam dolore minus. Dignissimos nihil explicabo deleniti dicta earum atque culpa consectetur? Nobis asperiores beatae natus, quos neque suscipit voluptas, hic eos eius magnam rem. Modi impedit omnis veritatis sequi nulla deserunt sed pariatur tenetur praesentium, maxime tempore ullam soluta delectus deleniti fuga labore quidem ad accusamus. Perferendis quam quisquam obcaecati, est minus atque officiis dignissimos ab dicta molestias ea nisi soluta magnam architecto nostrum possimus explicabo nulla nam. Facilis, pariatur aliquid illum sint officia eveniet voluptatem magni expedita assumenda, repellendus nulla. Vel consectetur tempora, accusantium atque sit sint illo minima cum sapiente laudantium tenetur eius in pariatur hic eaque harum! Ullam et, numquam odit cupiditate delectus ipsa? Explicabo corporis ipsum quasi blanditiis corrupti commodi aperiam, voluptas dicta accusantium sequi, eius veritatis quibusdam vero ad, dolore cupiditate velit sint rerum tenetur facilis eum. Quas officiis dolorem dolores voluptate soluta mollitia, dolorum corporis totam? Autem unde eius doloremque neque, ipsum, sit accusamus temporibus dicta corporis, ullam aperiam hic veniam minus molestias praesentium tempora. Quis quas debitis provident est consequuntur accusamus quaerat excepturi quam, eaque doloribus illum voluptatibus velit. Velit dicta aspernatur hic accusamus amet iure ipsum ullam natus a consectetur quidem aliquam officia ut harum soluta quod voluptatum facere obcaecati nemo, quaerat distinctio atque veniam at! Deserunt labore facilis, veritatis maxime quis, quos quibusdam nisi quia incidunt similique ad est sunt voluptate, velit tempora vel perferendis et consectetur facere! Eum similique odio doloremque? Optio similique nemo perferendis vitae ab, assumenda doloremque veritatis quia sunt, incidunt perspiciatis alias, hic aliquam pariatur impedit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti omnis ratione temporibus ipsum saepe iure? Repellat iure, pariatur culpa incidunt accusantium quam? Nemo totam culpa nisi sed nesciunt accusantium quo tenetur esse voluptatem officiis voluptates inventore nobis veritatis ab sit, consequatur id, cum vel? Assumenda cumque ut iure quisquam veritatis vitae molestiae corporis minima debitis itaque voluptatem nesciunt dolore cum ipsa, vero dolores aut quaerat dicta tenetur corrupti explicabo doloribus eaque! Animi, quaerat ex quod ea omnis tempore aperiam esse fugiat facere itaque error commodi suscipit sunt consequatur possimus deleniti corrupti earum dignissimos, quibusdam at? Consectetur doloremque voluptatum ut omnis?
                </div>
            </div>
        </div>
    )
}

export default FullPage

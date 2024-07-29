import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContactCard from './ContactCard'
import Spinner from '../Loader/Spinner';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/public/contacts');
        if (response.data.status === "Success") {
          setContacts(response.data.data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

  }, []);


  return (
    <div className='lg:max-w-7xl min-h-screen mx-auto bg-white dark:bg-slate-900 p-4'>
      <div className='text-lg dark:text-white flex my-4 justify-center items-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi sed assumenda et nihil! Molestias iste praesentium nobis a accusantium provident?</div>
      {loading ? <Spinner /> :
        <div className="   grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {contacts.map(contact => (
            <ContactCard key={contact.id.timestamp} props={contact} />
          ))}
        </div>
      }
    </div>
  )
}

export default Contact

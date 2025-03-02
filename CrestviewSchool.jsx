import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const CrestviewSchool = () => { return (
<div className='p-6 bg-gray-100 min-h-screen'>
<header className='flex justify-between items-center py-4 bg-green-700 text-white px-6'>
<h1 className='text-2xl font-bold'>Crestview School</h1> <nav>
<ul className='flex gap-4'>
<li><a href='#about' className='hover:underline'>About</a></li>
<li><a href='#admissions' className='hover:underline'>Admissions</a></li> <li><a href='#contact' className='hover:underline'>Contact</a></li>
</ul> </nav>
</header>
<main className='mt-8 grid gap-6'> <section id='about'>
<Card> <CardContent>
<h2 className='text-xl font-semibold mb-2'>About Crestview School</h2>
<img src='https://source.unsplash.com/featured/?african,culture' alt='African Culture' className='w-full h-40 object-cover mb-4 rounded-xl' /> <p>Crestview School is dedicated to providing quality education and fostering a vibrant learning community.</p>
</CardContent> </Card>
</section>
<section id='admissions'> <Card>
<CardContent>
<h2 className='text-xl font-semibold mb-2'>Admissions</h2>
<img src='https://source.unsplash.com/featured/?african,students' alt='African Students' className='w-full h-40 object-cover mb-4 rounded-xl' /> <p>Learn more about our admission process and how to enroll at Crestview School.</p>
<Button className='mt-4'>Apply Now</Button>
</CardContent> </Card>
</section>
<section id='contact'> <Card>
<CardContent>
<h2 className='text-xl font-semibold mb-2'>Contact Us</h2>
<img src='https://source.unsplash.com/featured/?african,community' alt='African Community' className='w-full h-40 object-cover mb-4 rounded-xl' /> <p>Have questions? Reach out to our team for more information.</p>
<Button className='mt-4'>Get in Touch</Button>
</CardContent> </Card>
</section> </main>
</div> );
};
export default CrestviewSchool;

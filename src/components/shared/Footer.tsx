import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '@/assets/logo.png';
import { CiDumbbell } from 'react-icons/ci';

const Footer = () => {
    return (
        <>
        <hr className="opacity-15" />
        <div className='flex justify-between items-center w-[96%] mx-auto py-5'>
            <div className=''>
                <Link
            href="/"
            className="flex items-center gap-2 text-md font-bold text-[#FFFFFF]"
          >
            <CiDumbbell className='text-[#C2F800] text-xl'/> FITLOG
          </Link>
            </div>
            <div className='text-[#6B7280]'>
                <small>© 2026 FitLog — Workout Library. Train hard, log honest.</small>
            </div>
        </div>
        </>
    );
};

export default Footer;
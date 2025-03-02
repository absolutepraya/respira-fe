'use client';
import ScrollableFeed from 'react-scrollable-feed';

export default function Template() {
    return (
        <ScrollableFeed className={`bg-white h-full w-full flex flex-col items-center relative justify-between shadow-2xl overflow-hidden`}>
            <p>NICE!</p>
        </ScrollableFeed>
    );
}
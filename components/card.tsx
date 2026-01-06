import React from 'react'

type CardInfoProps = {
    heading: string,
    description: string
}

type CardProps = {
    heading: string,
    description: string,
    imageUrl: string,
    slug?: string;
    className?: string
}

const CardInfo = ({ heading, description }: CardInfoProps) => {
    return (
        <div className='space-y-2'>
            <h4 className='font-bold text-xl font-family-electrolize text-white'>{heading}</h4>
            <p className='text-sm text-gray-400 leading-relaxed'>{description}</p>
        </div>

    )
}

export const Card = ({
    heading,
    description,
    imageUrl,
    slug,
    className = ''
}: CardProps) => {
    const clipPathStyle = `polygon(
        5% 8%, 40% 8%, 45% 3%, 48% 0%, 90% 0%, 95% 4%,
        100% 4%, 100% 96%, 95% 100%, 5% 100%, 0% 95%, 0% 12%
    )`;

    const CardWrapper = ({ children }: { children: React.ReactNode }) => {
        if (slug) {
            return (
                <a
                    href={`/clips/${slug}`}
                    className='block'
                >
                    {children}
                </a>
            );
        }
        return <>{children}</>
    }

    return (
        <CardWrapper>

            <div
                className="relative p-1 bg-yellow-300 hover:bg-yellow-500 transition-all duration-400 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20"
                style={{
                    clipPath: clipPathStyle
                }}
            >

                <div
                    className={`relative bg-[#2b2d42] p-10 overflow-hidden selection:bg-yellow-400 ${slug ? 'cursor-pointer' : ''} ${className}`}
                    style={{
                        clipPath: clipPathStyle
                    }}
                >
                    <div className='mb-4 rounded-lg overflow-hidden bg-black/30 border-2 border-white mt-6'
                        style={{
                            clipPath: `polygon(
                  5% 8%,
                  40% 8%,
                  45% 3%,
                  48% 0%,
                  90% 0%,
                  95% 4%,
                  100% 4%,
                  100% 96%,
                  95% 100%,
                  5% 100%,
                  0% 95%,
                  0% 12%
                )`
                        }}>
                        <img
                            src={imageUrl}
                            alt={heading}
                            className="
                  w-full 
                  h-48 
                  object-cover 
                  object-center
                  transition-transform duration-300
                  hover:scale-110
                "
                        /></div>
                    <CardInfo
                        heading={heading}
                        description={description}
                    />

                    {slug && (
                        <div className='mt-4 flex items-center text-xs text-white'>
                            <span>View Demo</span>
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </CardWrapper>
    )
}
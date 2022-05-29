import AnimatedText from 'react-animated-text-content';



export default function Loader() {


    return (<AnimatedText
        type="words" // animate words or chars
        animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
        }}
        animationType="float"
        interval={0.5}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        
        threshold={0.1}
        rootMargin="20%"
    >
        Content to animate
    </AnimatedText>)
}
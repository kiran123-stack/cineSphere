import { useState } from 'react';

const MovieFAQ =() => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const faqs = [
    {
      question: "What is your movie streaming service?",
      answer: "Our movie streaming service offers unlimited access to thousands of movies and TV shows. Stream on any device, anytime, anywhere with high-quality video and audio."
    },
    {
      question: "How much does it cost?",
      answer: "We offer flexible pricing plans starting from $9.99/month for basic, $13.99/month for standard, and $17.99/month for premium. All plans include unlimited streaming with no ads."
    },
    {
      question: "Can I download movies to watch offline?",
      answer: "Yes! With our standard and premium plans, you can download movies and TV shows to watch offline on your mobile devices. Downloads are available for up to 30 days."
    },
    {
      question: "How many devices can I watch on?",
      answer: "Basic plan allows 1 device, standard plan allows 2 devices simultaneously, and premium plan allows 4 devices at the same time. You can register unlimited devices on your account."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! There are no long-term contracts or cancellation fees. You can cancel your subscription at any time through your account settings, and you'll have access until the end of your billing period."
    }
  ];

  const toggleAnswer = (index :number) => {
     setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="movie-faq-container">
      <div className="movie-faq-wrapper">
        <h1 className="movie-faq-title">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="movie-faq-box">
            <div
              className="movie-faq-question-header"
              onClick={() => toggleAnswer(index)}
            >
              <div className="movie-faq-question">
                {faq.question}
              </div>
              <div className={`movie-faq-icon ${activeIndex === index ? 'active' : ''}`}>
                +
              </div>
            </div>
            <div className={`movie-faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieFAQ;
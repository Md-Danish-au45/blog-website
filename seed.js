const mongoose = require('mongoose');
const Blog = require('./models/blogs')


let blogs = [
    {
        id:1,
        title:"Artificial Intelligence",
        bodycontent:"Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry. Less than a decade after breaking the Nazi encryption machine Enigma and helping the Allied Forces win World War II, mathematician Alan Turing changed history a second time with a simple question:  Turing's paper and its subsequent Turing Test, established the fundamental goal and vision of artificial intelligence. At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative. It is the endeavor to replicate or simulate human intelligence in machines. Artificial intelligence is a set of algorithms and intelligence to try to mimic human intelligence. Machine learning is one of them, and deep learning is one of those machine learning techniques Simply put, machine learning feeds a computer data and uses statistical techniques to help it how to get progressively better at a task, without having been specifically programmed for that task, eliminating the need for millions of lines of written code. Machine learning consists of both supervised learning (using labeled data sets) and unsupervised learning (using unlabeled data sets).  ",
        img : "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        writer : "Khushi Purwar",
    },
    {
        id:2,
        title:"Data Acience",
        bodycontent:"The simplest definition of data science is the extraction of actionable insights from raw data. Our guide will walk you through the ins-and-outs of the ever-expanding field, including how it works and examples of how it’s being used today. A groundbreaking study in 2013 reported 90% of the entirety of the world’s data has been created within the previous two years. Let that sink in. In just two years, we've collected and processed 9x the amount of information than the previous 92,000 years of humankind combined. And it isn’t slowing down. It’s projected we’ve already created 2.7 zettabytes of data, and by 2020, that number will balloon to an astounding 44 zettabytes.What do we do with all of this data? How do we make it useful to us? What are it's real-world applications? These questions are the domain of data science. Commonly referred to as the “oil of the 21st century, our digital data carries the most importance in the field. It has incalculable benefits in business, research and our everyday lives. Your route to work, your most recent Google search for the nearest coffee shop, your Instagram post about what you ate, and even the health data from your fitness tracker are all important to different data scientists in different ways. Sifting through massive lakes of data, looking for connections and patterns, data science is responsible for bringing us new products, delivering breakthrough insights and making our lives more convenient.",
        img : "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        writer : "abc",
    },
    
    {
        id:3,
        title:"BlockChain",
        bodycontent:"Blockchain technology is most simply defined as a decentralized, distributed ledger that records the provenance of a digital asset. By inherent design, the data on a blockchain is unable to be modified, which makes it a legitimate disruptor for industries like payments, cybersecurity and healthcare. Our guide will walk you through what it is, how it's used and its history. Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing. A simple analogy for understanding blockchain technology is a Google Doc. When we create a document and share it with a group of people, the document is distributed instead of copied or transferred. This creates a decentralized distribution chain that gives everyone access to the document at the same time. No one is locked out awaiting changes from another party, while all modifications to the doc are being recorded in real-time, making changes completely transparent. Miners use special software to solve the incredibly complex math problem of finding a nonce that generates an accepted hash. Because the nonce is only 32 bits and the hash is 256, there are roughly four billion possible nonce-hash combinations that must be mined before the right one is found. When that happens miners are said to have found the and their block is added to the chain.",
        img : "https://images.unsplash.com/photo-1552057426-c9b4e8b2aef1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2NrY2hhaW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        writer : "Ardushi Agrawal",
    }
]

const seedDB = async ()=> {
    await Blog.insertMany(blogs);
    console.log("DB Seeded!!!")
}

module.exports =seedDB; 

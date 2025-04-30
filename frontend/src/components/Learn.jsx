

const Learn = () => {
  return (
    <section className="bg-gray-50 p-8 rounded-lg shadow-lg"
    style={{
      className:"blur-xl",
      backgroundImage: `url('https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-260nw-2158034833.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h2 className="text-3xl font-bold text-center text-white mb-6">Learning Resources</h2>
      
      <div className="space-y-6">
        {/* Interview Questions Practice */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Interview Question Practice</h3>
          <p className="text-gray-600 mt-2">
            Prepare for job interviews with a wide range of questions and solutions.
          </p>
          <a 
            href="https://www.careerride.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit CareerRide for Interview Questions
          </a>
        </div>

        {/* Web Development Learning */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Learn Web Development</h3>
          <p className="text-gray-600 mt-2">
            Start learning web development with tutorials and examples from W3Schools.
          </p>
          <a 
            href="https://www.w3schools.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit W3Schools for Web Development
          </a>
        </div>

        {/* DSA Learning */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Learn Data Structures & Algorithms</h3>
          <p className="text-gray-600 mt-2">
            Strengthen your problem-solving skills with Data Structures and Algorithms from TakeUForward.
          </p>
          <a 
            href="https://takeuforward.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit TakeUForward for DSA Learning
          </a>
        </div>

        {/* Learn Python */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Learn Python</h3>
          <p className="text-gray-600 mt-2">
            Explore Python programming with tutorials, exercises, and projects on Python.org.
          </p>
          <a 
            href="https://www.python.org/about/gettingstarted/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit Python.org for Python Tutorials
          </a>
        </div>

        {/* FreeCodeCamp */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Learn Full-Stack Web Development</h3>
          <p className="text-gray-600 mt-2">
            Learn full-stack web development with interactive tutorials and certification from FreeCodeCamp.
          </p>
          <a 
            href="https://www.freecodecamp.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit FreeCodeCamp for Web Development
          </a>
        </div>

        {/* Codecademy */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Interactive Coding Platform</h3>
          <p className="text-gray-600 mt-2">
            Learn programming languages, web development, and more interactively on Codecademy.
          </p>
          <a 
            href="https://www.codecademy.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit Codecademy for Interactive Courses
          </a>
        </div>

        {/* GeeksforGeeks */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Learn Data Structures & Algorithms (GeeksforGeeks)</h3>
          <p className="text-gray-600 mt-2">
            Master data structures and algorithms with tutorials and problems from GeeksforGeeks.
          </p>
          <a 
            href="https://www.geeksforgeeks.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit GeeksforGeeks for DSA Learning
          </a>
        </div>

        {/* Khan Academy */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Khan Academy for Programming and Math</h3>
          <p className="text-gray-600 mt-2">
            Explore free interactive lessons on programming, computer science, and math on Khan Academy.
          </p>
          <a 
            href="https://www.khanacademy.org/computing/computer-programming" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit Khan Academy for Programming
          </a>
        </div>

        {/* Coursera */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Learn Online Courses (Coursera)</h3>
          <p className="text-gray-600 mt-2">
            Explore university-level courses in computer science, programming, and more on Coursera.
          </p>
          <a 
            href="https://www.coursera.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit Coursera for Online Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Learn;

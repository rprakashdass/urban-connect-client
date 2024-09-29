document.addEventListener('DOMContentLoaded', () => {
    // Department Overview
    const departmentCards = document.getElementById('department-cards');
    const departments = [
      { name: 'Civil Department', users: 50 },
      { name: 'Road&Highways Department', users: 50 },
      { name: 'Water Department', users: 50 },
      { name: 'Transport Department', users: 50 },
    ];
  
    departments.forEach((department) => {
      const card = document.createElement('div');
      card.classList.add('department-card');
      card.innerHTML = `
       <a href='${department.name.replace(' ','')}.html'> <h3>${department.name}</h3>
        <p>Users: ${department.users}</p></a>
      `;
      departmentCards.appendChild(card);
    });
  
    // Project Management
    const totalProjects = document.getElementById('total-projects');
    const ongoingProjects = document.getElementById('ongoing-projects');
    const completedProjects = document.getElementById('completed-projects');
    const projectList = document.getElementById('project-list');
  
    totalProjects.textContent = 25;
    ongoingProjects.textContent = 15;
    completedProjects.textContent = 10;
  
    const projects = [
      { name: 'Project A', status: 'Ongoing' },
      { name: 'Project B', status: 'Completed' },
      { name: 'Project C', status: 'Ongoing' },
      { name: 'Project D', status: 'Completed' },
      { name: 'Project E', status: 'Ongoing' },
    ];
  
    projects.forEach((project) => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project-item');
      projectElement.textContent = `${project.name} - Status: ${project.status}`;
      projectList.appendChild(projectElement);
    });
  
    // Resource Utilization
    const totalResources = document.getElementById('total-resources');
    const availableResources = document.getElementById('available-resources');
    const allocatedResources = document.getElementById('allocated-resources');
    const resourceList = document.getElementById('resource-list');
  
    totalResources.textContent = 50;
    availableResources.textContent = 30;
    allocatedResources.textContent = 20;
  
    const resources = [
      { name: 'Resource A', status: 'Available' },
      { name: 'Resource B', status: 'Allocated' },
      { name: 'Resource C', status: 'Available' },
      { name: 'Resource D', status: 'Allocated' },
    ];
  
    resources.forEach((resource) => {
      const resourceElement = document.createElement('div');
      resourceElement.classList.add('resource-item');
      resourceElement.textContent = `${resource.name} - Status: ${resource.status}`;
      resourceList.appendChild(resourceElement);
    });
  
    // Coordination and Collaboration
    const upcomingMeetings = document.getElementById('upcoming-meetings');
    const pastMeetings = document.getElementById('past-meetings');
    const meetingList = document.getElementById('meeting-list');
  
    upcomingMeetings.textContent = 8;
    pastMeetings.textContent = 15;
  
    const meetings = [
      { name: 'Meeting A', date: '2023-05-15' },
      { name: 'Meeting B', date: '2023-06-01' },
      { name: 'Meeting C', date: '2023-04-20' },
      { name: 'Meeting D', date: '2023-03-10' },
    ];
  
    meetings.forEach((meeting) => {
      const meetingElement = document.createElement('div');
      meetingElement.classList.add('meeting-item');
      meetingElement.textContent = `${meeting.name} - Date: ${meeting.date}`;
      meetingList.appendChild(meetingElement);
    });
  
    // Capacity Building
    const upcomingTrainings = document.getElementById('upcoming-trainings');
    const pastTrainings = document.getElementById('past-trainings');
    const trainingList = document.getElementById('training-list');
  
    upcomingTrainings.textContent = 6;
    pastTrainings.textContent = 12;
  
    const trainings = [
      { name: 'Training A', date: '2023-06-15' },
      { name: 'Training B', date: '2023-07-01' },
      { name: 'Training C', date: '2023-05-20' },
      { name: 'Training D', date: '2023-04-10' },
    ];
  
    trainings.forEach((training) => {
      const trainingElement = document.createElement('div');
      trainingElement.classList.add('training-item');
      trainingElement.textContent = `${training.name} - Date: ${training.date}`;
      trainingList.appendChild(trainingElement);
    });
  });
    // Discussion Forum
  //   const totalPosts = document.getElementById('total-posts');
  //   const activeDiscussions = document.getElementById('active-discussions');
  //   const forumList = document.getElementById('forum-list');
  
  //   totalPosts.textContent = 100;
  //   activeDiscussions.textContent = 25;
  
  //   const forumPosts = [
  //     { title: 'Discussion on Project Coordination' },
  //     { title: 'Feedback on Resource Allocation Process' },
  //     { title: 'Suggestions for Capacity Building Programs' },
  //     { title: 'Question about Interdepartmental Collaboration' },
  //   ];
  
  //   forumPosts.forEach((post) => {
  //     const postElement = document.createElement('div');
  //     postElement.classList.add('forum-post');
  //     postElement.textContent = post.title;
  //     forumList.appendChild(postElement);
  //   });
  // });
  //   // Discussion Forum
  //   const totalPosts = document.getElementById('total-posts');
  //   const activeDiscussions = document.getElementById('active-discussions');
  //   const forumList = document.getElementById('forum-list');
  
  //   totalPosts.textContent = 100;
  //   activeDiscussions.textContent = 25;
  
  //   const forumPosts = [
  //     { title: 'Discussion on Project Coordination' },
  //     { title: 'Feedback on Resource Allocation Process' },
  //     { title: 'Suggestions for Capacity Building Programs' },
  //     { title: 'Question about Interdepartmental Collaboration' },
  //   ];
  
  //   forumPosts.forEach((post) => {
  //     const postElement = document.createElement('div');
  //     postElement.classList.add('forum-post');
  //     postElement.textContent = post.title;
  //     forumList.appendChild(postElement);
  //   });
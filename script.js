const eventsStore = [
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 2, 23, 15),
        image:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
    },
    {
        title:
            "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30),
        image:
            "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14),
        image:
            "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        category: "Technology",
        distance: 10,
    },
    {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100,
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2024, 2, 14, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 75,
    },
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
        date: new Date(2024, 2, 14, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        category: "Health and Wellbeing",
        distance: 15,
    },
];
const formatEventDate = (date) => {
    const options = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date).toUpperCase() + ' UTC';
};

const activitie = document.querySelector('.filter-list');

const renderEvents = (arr) => {
    activitie.innerHTML = '';

    const today = new Date(2024, 0, 1);
    // arr.sort((a, b) => new Date(a.date) - new Date(b.date));

    arr.forEach(event => {
        const eventDate = new Date(event.date);
        const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

        const isOnline = event.type === 'online';
        const imageClass = isOnline ? 'online-event' : '';

        const eventElement = document.createElement('div');
        eventElement.classList.add('filter-event_item');
        eventElement.innerHTML = `
            <div class="filter-image ${imageClass}">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="filter-item__text">
                <p class="filter-item__date">${formatEventDate(event.date)} (${daysLeft} days left)</p>
                <h3>${event.title}</h3>
                <p class="filter-item__category">
                    ${event.category}
                    ${event.type === 'offline' ? ` (${event.distance} km)` : ''}
                </p>
            </div>
        `;
        activitie.appendChild(eventElement);
    });
}

renderEvents(eventsStore)

//category 
const categoryBtnSocial = document.getElementById('social');
const categoryBtnHobbies = document.getElementById('hobbies');
const categoryBtnHealth = document.getElementById('health');
const categoryBtnBusiness = document.getElementById('business');
const categoryBtnTechnology = document.getElementById('technology');

categoryBtnSocial.addEventListener('click', () => {
    const socialEvents = eventsStore.filter(event => event.category === 'Social Activities');
    renderEvents(socialEvents);
});
categoryBtnHobbies.addEventListener('click', () => {
    const hobbiesEvents = eventsStore.filter(event => event.category === 'Hobbies and Passions');
    renderEvents(hobbiesEvents);
});
categoryBtnHealth.addEventListener('click', () => {
    const healthEvents = eventsStore.filter(event => event.category === 'Health and Wellbeing');
    renderEvents(healthEvents);
});
categoryBtnBusiness.addEventListener('click', () => {
    const businessEvents = eventsStore.filter(event => event.category === 'Business');
    renderEvents(businessEvents);
});
categoryBtnTechnology.addEventListener('click', () => {
    const technologyEvents = eventsStore.filter(event => event.category === 'Technology');
    renderEvents(technologyEvents);
});

//distance
const distanceBtn5 = document.getElementById('5');
const distanceBtn10 = document.getElementById('10');
const distanceBtn15 = document.getElementById('15');
const distanceBtn25 = document.getElementById('25');
const distanceBtn50 = document.getElementById('50');
const distanceBtn75 = document.getElementById('75');
const distanceBtn100 = document.getElementById('100');

distanceBtn5.addEventListener('click', () => {
    const distanceEvents5 = eventsStore.filter(event => event.distance === 5);
    renderEvents(distanceEvents5);
});
distanceBtn10.addEventListener('click', () => {
    const distanceEvents10 = eventsStore.filter(event => event.distance === 10);
    renderEvents(distanceEvents10);
});
distanceBtn15.addEventListener('click', () => {
    const distanceEvents15 = eventsStore.filter(event => event.distance === 15);
    renderEvents(distanceEvents15);
});
distanceBtn25.addEventListener('click', () => {
    const distanceEvents25 = eventsStore.filter(event => event.distance === 25);
    renderEvents(distanceEvents25);
});
distanceBtn50.addEventListener('click', () => {
    const distanceEvents50 = eventsStore.filter(event => event.distance === 50);
    renderEvents(distanceEvents50);
});
distanceBtn75.addEventListener('click', () => {
    const distanceEvents75 = eventsStore.filter(event => event.distance === 75);
    renderEvents(distanceEvents75);
});
distanceBtn100.addEventListener('click', () => {
    const distanceEvents100 = eventsStore.filter(event => event.distance === 100);
    renderEvents(distanceEvents100);
});

//type
const typeBtnOnline = document.getElementById('online');
const typeBtnOffline = document.getElementById('offline');

typeBtnOnline.addEventListener('click', () => {
    const onlineEvents = eventsStore.filter(event => event.type === 'online');
    renderEvents(onlineEvents);
});
typeBtnOffline.addEventListener('click', () => {
    const offlineEvents = eventsStore.filter(event => event.type === 'offline');
    renderEvents(offlineEvents);
});

//day 
const dayBtn = document.getElementById('day');


dayBtn.addEventListener('click', () => {
    const allEventsSorted = [...eventsStore].sort((a, b) => new Date(a.date) - new Date(b.date));
    renderEvents(allEventsSorted);
});



//reset
const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', () => {
    renderEvents(eventsStore)
})

//close
const btnClose = document.querySelector('.iframe-close');
const map = document.querySelector('.iframe-wrap')

btnClose.addEventListener('click', () => {
    map.classList.toggle('hidden')
})
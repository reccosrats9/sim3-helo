create table users (
    id serial primary key, 
    username varchar(20),
    password varchar(20),
    profile_pic text
);

insert into users ( username, password, profile_pic)
values 
('GoofyRabbit', 'iluvcarrots', 'https://i.pinimg.com/originals/a4/f1/ea/a4f1eaab9b2b1c8a4e1c9380bc4c3bd1.jpg'),
('HappyDawg', 'humanteeth', 'http://www.allaboutweybridge.co.uk/aaw/weybridge/surrey/crazy-dog-hotel-boarding-weybridge-1_300.jpg'),
('TinyKitten', 'imatigress', 'http://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg');

select * from users;
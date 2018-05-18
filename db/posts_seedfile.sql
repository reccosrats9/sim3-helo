create table posts(
    id serial primary key, 
    title varchar(45),
    img text,
    content text,
    author_id integer references users.id
);

insert into posts(title, img, content, author_id)
values
('Carrots R Gross', 'http://4-pics-1-word.games-answers.net/wp-content/themes/twentyeleven/games/4p1w/images/_4303_1.jpg', null, 3),
('Carrots R Friends AND Food', 'https://i.pinimg.com/736x/f4/0a/c3/f40ac3d7a2a050346fa974ec93576998--food-art-food-networktrisha.jpg', null, 1),
('Carrots R... SQUIRREL!','https://img.huffingtonpost.com/asset/581c1eab150000b700531aa2.jpeg?cache=u6ye1hoy5s&ops=1910_1000', null, 2);

select* from posts;

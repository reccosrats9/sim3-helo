select * 
from posts p
join users u on p.author_id= u.id
where author_id != $1
AND title like %$2%
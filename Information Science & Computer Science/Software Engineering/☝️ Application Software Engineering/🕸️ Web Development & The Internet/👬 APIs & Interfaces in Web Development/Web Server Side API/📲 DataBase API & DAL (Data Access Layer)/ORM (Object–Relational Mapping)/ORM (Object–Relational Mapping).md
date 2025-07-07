# ORM (Object–Relational Mapping)

[TOC]



## Res


## Intro
[Object-Relational Mapping](https://en.wikipedia.org/wiki/Object-relational_mapping) (ORM) is a technique that lets you **query and manipulate data from a database using an object-oriented paradigm**. When talking about ORM, most people are referring to a _library_ that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.

For example, here is a completely imaginary case with a pseudo language:

You have a book class, you want to retrieve all the books of which the author is "Linus". Manually, you would do something like that:
```
book_list = new List();
sql = "SELECT book FROM library WHERE author = 'Linus'";
data = query(sql); // I over simplify ...
while (row = data.next())
{
     book = new Book();
     book.setAuthor(row.get('author');
     book_list.add(book);
}
```

With an ORM library, it would look like this:
```
book_list = BookTable.query(author="Linus");
```

The mechanical part is taken care of automatically via the ORM library.


### How to learn about ORM?
Well, use one. Whichever ORM library you choose, they all use the same principles. There are a lot of ORM libraries around here:

- Java: [Hibernate](https://en.wikipedia.org/wiki/Hibernate_(Java)).
- PHP: [Propel](https://en.wikipedia.org/wiki/Propel_(PHP)) or [Doctrine](https://en.wikipedia.org/wiki/Doctrine_(PHP)) (I prefer the last one).
- Python: the Django ORM or [SQLAlchemy](https://en.wikipedia.org/wiki/SQLAlchemy) (My favorite ORM library ever).
- C#: [NHibernate](https://en.wikipedia.org/wiki/NHibernate) or [Entity Framework](https://en.wikipedia.org/wiki/Entity_Framework)

If you want to try an ORM library in Web programming, you'd be better off using an entire framework stack like:

- [Symfony](https://en.wikipedia.org/wiki/Symfony) (PHP, using Propel or Doctrine).
- [Django](https://en.wikipedia.org/wiki/Django_(web_framework)) (Python, using a internal ORM).

Do not try to write your own ORM, unless you are trying to learn something. This is a gigantic piece of work, and the old ones took a lot of time and work before they became reliable.



## Ref
[👍 What is an ORM, how does it work, and how should I use one? | Stackoverflow]: https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one

[What is an ORM?]: https://www.prisma.io/dataguide/types/relational/what-is-an-orm#:~:text=An%20ORM%2C%20or%20Object%20Relational,used%20in%20object%2Doriented%20programming

[Object-Relational Mapping | Wikipedia]: https://en.wikipedia.org/wiki/Object–relational_mapping

[object-relational mapping (ORM) | theserversied - TechTarget]: https://www.theserverside.com/definition/object-relational-mapping-ORM


import SidebarLayout from "@/app/components/admin/layout/sidebarLayout";
import CommentCart from "@/app/components/sample-project/commentCart";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";


const CommentData = [
    {
        "postId": 5,
        "it": 21,
        "name": "something of the resilience of things that will follow him but",
        "email": "Noemie@marques.me",
        "body": "destroyed or I will explain the troubles they do not know the benefits of hatred with pleasure and pain but error is chosen"
    },
    {
        "postId": 5,
        "it": 22,
        "name": "to be repulsed further, or at the time, who is here",
        "email": "Khalil@emile.co.uk",
        "body": "who hates the very pleasures of our present mind who does not interfere with who of ours I will explain something by flight pleasure flees their"
    },
    {
        "postId": 5,
        "it": 23,
        "name": "some times indeed nothing this",
        "email": "Sophia@arianna.co.uk",
        "body": "pleasures are provided to be repelled by just discernment so that  nut pain for something and expedient pleasure are the things of life in which or to choose what to flee"
    },
    {
        "postId": 5,
        "it": 24,
        "name": "at the time they were blessed",
        "email": "Jeffery@juwan.us",
        "body": "repels rejection because following is painful I will explain nothing and not be and not present and it is held more harshly"
    },
    {
        "postId": 6,
        "it": 27,
        "name": "he will suffer some pains",
        "email": "Francesco.Gleason@nella.us",
        "body": "unless or which, by reason of labors, of great things, whence and pleasure often pleasures of the body's kind, I will often continue them"
    },
    {
        "postId": 6,
        "it": 28,
        "name": "where pleasures are pleasures, but pains worthy of truth as duties",
        "email": "Ronny@rosina.org",
        "body": "the pleasure to be repelled by which others but the praisers"
    },
    {
        "postId": 6,
        "it": 29,
        "name": "his distinction will be pain",
        "email": "Jennings_Pouros@erica.biz",
        "body": "times are pleasure but great distinction is pain not that trouble itself hates the things of the body, for there is no error of things"
    },
    {
        "postId": 20,
        "id": 99,
        "name": "laudantium delectus nam",
        "email": "Hildegard.Aufderhar@howard.com",
        "body": "aut quam consequatur sit et repellat maiores laborum similique voluptatem necessitatibus nihil et debitis nemo occaecati cupiditate modi dolorum quia aut"
      },
      {
        "postId": 20,
        "id": 100,
        "name": "et sint quia dolor et est ea nulla cum",
        "email": "Leone_Fay@orrin.com",
        "body": "architecto dolorem ab explicabo et provident et et eos illo omnis mollitia ex aliquam atque ut ipsum nulla nihil quis voluptas aut debitis facilis"
      },
      {
        "postId": 21,
        "id": 101,
        "name": "perspiciatis magnam ut eum autem similique explicabo expedita",
        "email": "Lura@rod.tv",
        "body": "repudiandae nostrum odio enim eum optio aut omnis illo quasi quibusdam inventore explicabo reprehenderit dolor saepe possimus molestiae"
      },
    {
        "postId": 6,
        "it": 30,
        "name": "as if we do not take pleasure or",
        "email": "Lurline@marvin.biz",
        "body": "they succeed because it is to be taken with pleasure and to reject the pleasure of the mind itself, they provide to open those who are wise to this life to the accusers of him who takes pleasure in pain and"
    },
    {
        "postId": 7,
        "it": 31,
        "name": "from wanting to please him with his hatred",
        "email": "Buford@shaylee.biz",
        "body": "because they happen that there is something that is right to the end of things just because they are and he seeks pleasure and it happens that he rejects them or"
    },
]



const Comments = () => {


    return (
        <>
            <SidebarLayout />
            <ul role="list" className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4 px-4 dark:bg-slate-800 lg:absolute lg:right-72`}>
               {CommentData.map((data) => <CommentCart item={data} /> )} 
            </ul>
            
        </>
    )
}
export default Comments;


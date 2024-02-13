import Food from "@/components/food";

export default function Page({ params }: { params: { category: string } }) {
  return (
    <div>
      <h1 className="font-medium text-2xl capitalize">{params.category}</h1>
      <div className="mx-auto grid w-full max-w-7xl items-stretch space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        <Food
          id="1"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
        <Food
          id="2"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
        <Food
          id="3"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
        <Food
          id="4"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
        <Food
          id="5"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
        <Food
          id="6"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
        <Food
          id="7"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
        <Food
          id="8"
          name="Nike Air Max 21A"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae neque adipisci eum enim, natus illo inventore totam?"
          price="599"
          category={params.category}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
      </div>
    </div>
  );
}

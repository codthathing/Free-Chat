import { Camera, Edit } from "lucide-react";
import React from "react";

function MessagePage() {
  return (
    <section>
      <header className="p-5">
        <div>
          <h1>Messages</h1>
          <div>
            <Camera />
            <Edit />
          </div>
        </div>
        <form action="">
          <div>
            <search>
              <i></i>
              <input type="search" name="" id="" />
            </search>
            <i></i>
          </div>
        </form>
      </header>
      <main>
        <section>
          <h3></h3>
          <main>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
          </main>
        </section>
        <section>
          <div>
            <main>
              <img src="" alt="" />
              <div>
                <h3></h3>
                <p></p>
              </div>
            </main>
            <time datetime="19:30"></time>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <i></i>
          <p></p>
        </div>
      </footer>
    </section>
  );
}

export default MessagePage;

import Image from 'next/image';
import React from 'react'

export default function PortFolios() {
  return (
    <div className="w-full  bg-white dark:bg-darkmode">
      <Image src={"/assets/icons/wavedown.svg"} width={4000} height={500} />
      <div className='bg-wave'>
        <div className="primary-width">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              eveniet quibusdam veritatis eum quas eius magni at possimus
              necessitatibus veniam! Eligendi consequatur at dignissimos
              officia? Eveniet provident, expedita sapiente tempora quae
              aliquam. Quisquam odio voluptatibus, nam provident totam repellat
              quasi hic vitae ut alias voluptas a unde consectetur fugit itaque
              expedita possimus, earum veritatis dolorum ratione aliquam? Sequi
              maxime optio facilis rerum! Placeat quod, reiciendis dignissimos
              cumque nam odit iste incidunt cupiditate esse quas vero dolor
              molestias illo neque ipsam doloremque asperiores et! Blanditiis
              voluptate excepturi, tenetur odit, deserunt hic nostrum
              consectetur et dolor harum magni perspiciatis esse id. Obcaecati?
            </p>
          </div>
        </div>
      </div>
      <Image src={"/assets/icons/waveup.svg"} width={4000} height={500} />
      PortFolios
    </div>
  );
}

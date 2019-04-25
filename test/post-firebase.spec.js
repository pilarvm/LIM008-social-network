// importamos la funcion que vamos a testear
// import mocksFirebase from '../_mocks_/firebase-mocks.js';
// global.firebase = mocksFirebase(); 
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post1: {
          name: 'Maria',
          descripcion: ' Hola post ',
          profilePicUrl: 'https://lh5.googleusercontent.com/photo.jpg',
          likeCounter: 0,
          typeShare: 'privado',
          id: 'post1'

          
        },
        post2: {
          name: 'Esthefany',
          descripcion: ' Hola nuevo mundo',
          profilePicUrl: 'https://lh5.googleusercontent.com/photo.jpg',
          likeCounter: 0,
          typeShare: 'publico',
          id: 'post2'
         
        },
      }
    }
  }
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { addPost, getPost, countLike,  /*editPost*/ /* deletePost*/ } from '../src/lib/controller-firebase.js';

describe('addPost', () => {
  it('debería poder agregar un post', (done) => {
    return addPost('agregando post 2', 'Publico', 'Código de usuario', 'Foto de usuario', 'Nombre desconocido')
      .then(() => {
      // expect(dataPost).toBe('agregando post', 'Publico', 'Código de usuario', 'Foto de usuario', 'Nombre desconocido');
        const callFunction = (arrDePosts) => {
          let result = '';
          for (let i = 0; i < arrDePosts.length; i++) {
            const positionArr = arrDePosts[i];
            if (positionArr.descripcion === 'agregando post 2') {
              result = true;
            }
          }
          expect(result).toBe(true);
          done();
        };
        getPost(callFunction);
      });
  });
});
describe('countLike', () => {
  it('debería poder agregrar likes', (done) => {
    // 1. Para poder probar si agregar likes funciona, necesitamos tener
    // 1 objeto post vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // const objPost = {likeCounter: 0, id: 'post1'};

    // 2. Efectuamos el agregar un like al post 
    return countLike(objPost)
      // 3. Cuando se haya agregado 1 like al post...
      .then(() => {
        const callFunction = (allPosts) => {
          // 5. Cuando tengamos todos los pots de firebase
          //console.log(allPosts);
          const result = allPosts.find((post) => {
            // 6. Buscamos aquel que tenga el id del obj del paso 1
            return post.id === objPost.id;
          });

          // 7. Comprobamos que este post obtenido tenga 1 like mas
          expect(result.likeCounter).toBe(1);
          done();
        };
        
        // 4. Comprobamos si es verdad trayendo de vuelta todos los posts
        // desde firebase
        getPost(callFunction);
      });
  });
});
// describe('editPost', () => {
//   it('debería poder editar los post', () => {
//     // Para poder probar si editar post funciona necesitamos tener un objeto
//     // de post vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
//     // despues efectuamos el editar post
//     return editPost(objEdit)
//     // cuando se edita el post empieza la promesa 
//       .then(() => {
//         const callFunction = (allPosts) => {
//       console.log(allPosts)
      
//         }
//       });
//   });
// });

// describe('deletePost', () => {
//   it('debería poder eliminar un post', (done) => {
//     return deletePost('No quiero ser eliminado')
//       .then(() => {
//         const callFunction = () => {
//           const result = post.find((elemtPost) => {
//             return elemtPost.id === 'No quiero ser eliminado';
//           });
//           expect(result).toBe(undefined);
//           done();
//         };   
//         getPost(callFunction);
//       });
//   });
// });


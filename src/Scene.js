import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Matter, { Bodies, Composites, Engine, Mouse, MouseConstraint, Render, Runner, World } from "matter-js";
import { sample } from "lodash";
import github from "./assets/github-icon.svg";
import google from "./assets/google-icon.svg";
import facebook from "./assets/facebook-icon.svg";
import twitter from "./assets/twitter-icon.svg";
import linkedin from "./assets/linkedin-icon.svg";
import discord from "./assets/discord-icon.svg";
import spotify from "./assets/spotify-icon.svg";
import twitch from "./assets/twitch-icon.svg";
import zoom from "./assets/zoom-icon.svg";
import slack from "./assets/slack-icon.svg";
import apple from "./assets/apple-icon.svg";
import microsoft from "./assets/microsoft-icon.svg";
import gitlab from "./assets/gitlab-icon.svg";
import bitbucket from "./assets/bitbucket-icon.svg";
import notion from "./assets/notion-icon.svg";
import workos from "./assets/workos-icon.svg";
import keycloak from "./assets/keycloak-icon.svg";

const Scene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
  
    const engine = Engine.create({
      positionIterations: 20,
    });

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,

      options: {
        width: 1950,
        height: 1250,
        fillStyle: "white",
        wireframes: false,
      },
    });

    const images = [
      github,
      google,
      facebook,
      twitter,
      linkedin,
      discord,
      spotify,
      twitch,
      zoom,
      slack,
      apple,
      microsoft,
      gitlab,
      bitbucket,
      notion,
      workos,
      keycloak,
    ];

    const stack = Composites.stack(50, 20, 10, 5, 5, 5, function (x, y) {
      switch (Math.round(Math.random(0, 1))) {
        case 0:
          if (Math.random() < 0.8) {
            return Bodies.rectangle(
              Math.random() * window.innerWidth,
              Math.random() * -600,
              80,
              80,
              {
                restitution: 0.5,
                render: {
                  sprite: {
                    texture: sample(images),
                    xScale: 0.15,
                    yScale: 0.15,
                  },
                },
              }
            );
          } else {
            return Bodies.rectangle(
              Math.random() * window.innerWidth,
              Math.random() * -600,
              80,
              80,
              {
                restitution: 0.5,
                render: {
                  sprite: {
                    texture: sample(images),
                    xScale: 0.15,
                    yScale: 0.15,
                  },
                },
              }
            );
          }
        case 1:
          return Bodies.polygon(x, y, 100, Math.random(50, 10));
        default:
          break;
      }
    });

    World.add(engine.world, [
      Bodies.rectangle(0, 930, render.options.width * 2, 20, {
        isStatic: true,
        render: { fillStyle: "#232323" },
      }),
    ]);

    World.add(engine.world, stack);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
      World.add(
        engine.world,
        Bodies.rectangle(
          Math.random() * window.innerWidth,
          Math.random() * -600,
          80,
          80,
          {
            restitution: 0.5,
            render: {
              sprite: {
                texture: sample(images),
                xScale: 0.1,
                yScale: 0.1,
              },
            },
          }
        )
      );
    });

    Runner.run(engine);

    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default Scene;

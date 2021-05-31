/*
 * Copyright (C) 2021 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonos
 *
 * This file is part of Project Fonos
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ari from "ari-client";
import wait from "wait-port";
import logger from "@fonos/logger";
import events from "./events_handler";

// First try the short env but fallback to the cannonical env
const ariHost = process.env.ARI_INTERNAL_URL || process.env.MS_ARI_INTERNAL_URL;
const ariUsername = process.env.ARI_USERNAME || process.env.MS_ARI_USERNAME;
const ariSecret = process.env.ARI_SECRET || process.env.MS_ARI_SECRET;

const connection = {
  host: ariHost.split("//")[1].split(":")[0],
  port: parseInt(ariHost.split("//")[1].split(":")[1])
};

wait(connection)
  .then((open) => {
    if (open) {
      ari.connect(ariHost, ariUsername, ariSecret, events);
      return;
    }

    logger.info("The port did not open before the timeout...");
  })
  .catch(console.error);

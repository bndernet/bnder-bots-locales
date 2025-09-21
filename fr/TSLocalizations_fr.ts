import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_fr {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `L'échéance de la tâche **${id}** ${taskTitle} est due le ${deadline} dans le serveur [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Vous avez été affecté à la tâche **${id}** ${taskText} dans le serveur [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Tâche ${id} assignée`;
            },
            assigned_embed_footer: "Ces notifications peuvent être désactivées par un administrateur de serveur en utilisant la commande \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Marquer comme en cours",
            assigned_embed_button_done: "Marquer comme fait",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `La date limite pour la tâche ${id} est dépassée dans le serveur [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `La tâche **${id}** ${taskTitle} à laquelle vous êtes affecté a été répétée et doit être effectuée à nouveau sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tâche ${id} répétée`;
            },
            deadline_alert: "Date limite de tâche",
            commented_embed_title(id: string): string {
                return `Commentaire ajouté à la tâche ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Un commentaire a été ajouté à une tâche dans le serveur [${guildName}](<https://discord.com/channels/${guildId}>) par ${author}: ${commentText}`;
            },
            comment_response_button: "Répondre au commentaire",
            stop_followup_reminder_button: "Arrêter le rappel de suivi",
            extend_deadline_by_one_day_button: "Prolonger le délai de 1 jour",
            extend_deadline_by_two_days_button: "Prolonger le délai de 2 jours",
            extend_deadline_by_one_week_button: "Prolonger le délai de 1 semaine",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Vous avez été ajouté comme observateur à la tâche **${id}** ${taskText} sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>) par <@${addedBy}>. Vous recevrez des notifications dès qu'un changement sera apporté à cette tâche. Pour ne plus recevoir de notifications, cliquez sur le bouton ci-dessous.`;
            },
            watcher_added_notification_unsubscribe_button: "Se désabonner",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `La tâche **${id}** ${taskTitle} que vous observez sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>) a changé :`;
            },
            watcher_notification_footer: "Désactiver les notifications pour cette tâche en utilisant la commande « /task unwatch ».",
            watcher_embed_title(id: string): string {
                return `Mise à jour de la tâche ${id}`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Le jalon **${milestoneName}** doit être atteint dans moins de 6 heures sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>) et comporte des tâches à accomplir.`;
            },
            status_todo: "À faire",
            status_in_progress: "En cours",
            status_done: "Fait"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Date limite",
            assignees_field: "Assignés",
            status_field: "Statut",
            todos_field: "À faire",
            delete_at_field: "Supprimer à",
            project_field: "Projet",
            topic_field: "Sujet",
            text_field: "Texte",
            role_field: "Rôle",
            permission_field: "Autorisation",
            user_field: "Utilisateur",
            preset_field: "Préréglage",
            priority_field: "Priorité",
            label_field: "Étiquette",
            personal_field: "Personnel",
            manager_field: "Manager",
            repeat_interval_field: "Intervalle de répétition en jours",
            repeat_end_date_field: "Date de fin de répétition",
            milestone_field: "Jalon",
            due_date_field: "Date d'échéance",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "En cours";
                    case 2:
                        return "Fait";
                    default:
                        return "Inconnu";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Date limite pour la tâche ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `La date limite pour la tâche **${id}** est le ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tâche ${id} supprimée.`;
                },
                description(id: string): string {
                    return `La tâche ${id} a été supprimée de la corbeille.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tâche ${id} répétée.`;
                },
                description(id: string): string {
                    return `La tâche ${id} a été répétée et l'état a été défini sur todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tâche ${id} créée.`;
                },
                description(task_text: string, id: string): string {
                    return `La tâche ${id} a été créée avec le texte: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tâche ${id} mise à jour.`;
                },
                description(id: string): string {
                    return `La tâche ${id} a été mise à jour et les données suivantes ont été modifiées.`;
                }
            },
            project_created: {
                title: "Projet créé",
                description(projectName: string): string {
                    return `Projet ${projectName} a été créé`;
                }
            },
            project_deleted: {
                title: "Projet supprimé",
                description(projectName: string): string {
                    return `Projet ${projectName} a été supprimé`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Statut de la tâche ${id} modifié`;
                }
            },
            permission_revoked: {
                title: "Autorisation révoquée",
            },
            permission_granted: {
                title: "Autorisation accordée",
            },
            preset_applied: {
                title: "Préréglage appliqué",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `La date limite pour la tâche ${id} est dépassée`;
                }
            },
            project_updated: {
                title: "Projet mis à jour",
                description(name: string): string {
                    return `Projet ${name} a été mis à jour`;
                }
            },
            test_message: {
                title: "Ceci est un message de test",
                description: "Si vous voyez ce message, le webhook fonctionne correctement et la journalisation est activée."
            },
            comment_added: {
                title(id: string): string {
                    return `Commentaire ajouté à la tâche ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Commentaire supprimé de la tâche ${id}`;
                }
            },
            topic_created: {
                title: "Sujet créé",
                description(name: string): string {
                    return `Sujet ${name} a été créé`;
                }
            },
            topic_updated: {
                title: "Sujet mis à jour",
                description(name: string): string {
                    return `Sujet ${name} a été mis à jour`;
                }
            },
            topic_deleted: {
                title: "Sujet supprimé",
                description(name: string): string {
                    return `Sujet ${name} a été supprimé`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Document ${id} créé`;
                },
                description(name: string): string {
                    return `Document ${name} a été créé`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Document ${id} mis à jour`;
                },
                description(name: string): string {
                    return `Document ${name} a été mis à jour`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Document ${id} supprimé`;
                },
                description(name: string): string {
                    return `Document ${name} a été supprimé`;
                }
            },
            label_created: {
                title: "Étiquette créée",
                description(name: string): string {
                    return `L'étiquette ${name} a été créée`;
                }
            },
            label_updated: {
                title: "Étiquette mise à jour",
                description(name: string): string {
                    return `L'étiquette ${name} a été mise à jour`;
                }
            },
            label_deleted: {
                title: "Étiquette supprimée",
                description(name: string): string {
                    return `L'étiquette ${name} a été supprimée`;
                }
            },
            attachments_field: "Pièces jointes",
            milestone_created: {
                title: "Jalon créé",
            },
            milestone_updated: {
                title: "Jalon mis à jour",
            },
            milestone_deleted: {
                title: "Jalon supprimé",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `L'événement à venir (${id}) **${name}** commence dans ${durationTillEventMinutes} minutes à ${startTime} dans [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Vous avez été invité à l'événement ${eventId} par <@${inviterId}>: **${eventName}** commençant à ${start} et se terminant à ${end}.\n-# Toutes les dates sont calculées dans ${timezone}. Utilisez \"/settings timezone\" pour modifier le fuseau horaire de l'ensemble du serveur, ou \"/preferences timezone\" pour modifier le vôtre.`;
                },
                accept_button: "Accepter",
                deny_button: "Refuser"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> a mis à jour l'événement ${eventId}: **${eventName}** commençant à ${start} et se terminant à ${end}.\n-# Toutes les dates sont calculées dans ${timezone}. Utilisez \"/settings timezone\" pour modifier le fuseau horaire de l'ensemble du serveur, ou \"/preferences timezone\" pour modifier le vôtre.`;
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Félicitations! Vous avez obtenu une place pro sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>). Vous avez désormais accès aux [fonctionnalités pro](<https://bnder.net/pricing>). Profitez-en!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Action requise : Échec du paiement de l’abonnement Pro\nNous n’avons pas pu traiter le paiement d’un ou plusieurs abonnements Pro sur [${guildName}](<https://discord.com/channels/${guildId}>). Pour éviter de perdre l’accès aux fonctionnalités Pro, veuillez [mettre à jour vos informations de paiement et payer votre facture maintenant](<${customerPortalLink}>).\n\nVos fonctionnalités Pro seront bientôt désactivées si aucune mesure n’est prise.\n\nBesoin d’aide ? [Contacter le support](https://bnder.net/discord) — nous sommes là pour vous.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Le fichier **${fileName}** a été partagé avec vous sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>) par <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Le dossier **${folderName}** a été partagé avec vous sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>) par <@${userId}>`;
            }
        },
        self_data_download_ready: "Vos données sont prêtes à être téléchargées. Vous pouvez les télécharger dans [notre application](<https://bnder.net/app/>). Le lien de téléchargement est disponible pendant deux semaines.",
        tutorial_tasks: {
            tutorial_label_name: "Tutoriel",
            create_first_task_title: "Créez votre première tâche",
            create_first_task_description: "Commencez par créer une tâche. Donnez-lui un nom et éventuellement une description.",
            change_task_status_title: "Changer le statut de la tâche",
            change_task_status_description: "Changez le statut d'une tâche en 'En cours' ou 'Terminé' en la faisant glisser dans la colonne correspondante.",
            invite_team_members_title: "Invitez vos membres d'équipe",
            invite_team_members_description: "Invitez vos membres d'équipe à rejoindre votre espace de travail. Ils verront l'invitation dans leurs paramètres utilisateur.",
            explore_workspace_title: "Explorez l'espace de travail",
            explore_workspace_description: "Explorez l'espace de travail et familiarisez-vous avec les fonctionnalités. Vous pouvez créer des tâches, gérer les membres, et plus encore. Vous pouvez également consulter les paramètres pour ajuster le format de date, la langue et le fuseau horaire."
        },
        mails: {
            footer: {
                company_limited_liability: "à responsabilité limitée",
                company_address: "Im Flath 12 - 38542 Leiferde - Allemagne",
                company_register_court: "Tribunal d’instance de Hildesheim - HRB 209373",
                company_ceo: "Gérant : Jan Brinkmann",
                company_contact: "E-mail : contact@bnder.net - Téléphone : +49 511 45032009",
                legal_automated_email: "Cet e-mail a été envoyé automatiquement. Veuillez ne pas y répondre.",
                legal_privacy_policy_prefix: "Notre politique de confidentialité est disponible sur",
                legal_imprint: "Mentions légales",
                legal_terms_of_use: "Conditions d’utilisation",
                legal_privacy_policy: "Politique de confidentialité",
            },
            verify_email: {
                headline: "Veuillez confirmer votre adresse e-mail",
                text: "Veuillez confirmer votre adresse e-mail en cliquant sur le lien ci-dessous.",
                primaryActionText: "Confirmer l’adresse e-mail",
            },
            password_changed: {
                headline: "Mot de passe modifié",
                text: "Votre mot de passe a été modifié avec succès. Si vous n’êtes pas à l’origine de ce changement, veuillez contacter immédiatement le support à contact@bnder.net.",
            },
            reset_password: {
                headline: "Réinitialiser le mot de passe",
                text: "Pour réinitialiser votre mot de passe, cliquez sur le bouton ci-dessous. Si vous n’avez pas demandé cette réinitialisation, ignorez cet e-mail.",
                primaryActionText: "Réinitialiser le mot de passe",
            },
            workspace_invitation: {
                headline: "Invitation à l’espace de travail",
                text(workspaceName: string): string {
                    return `Vous avez été invité à rejoindre l’espace de travail ${workspaceName}. Cliquez sur le bouton ci-dessous pour accepter l’invitation et rejoindre l’espace.`;
                },
                primaryActionText: "Rejoindre l’espace de travail",
            },
            task_assigned: {
                subject: "Une nouvelle tâche vous a été assignée",
                greeting(guildName: string): string {
                    return `Une tâche vous a été attribuée dans l'espace de travail ${guildName}.`;
                },
                no_deadline: "Aucune date limite n'est fixée pour cette tâche.",
                open_in_app: "Ouvrir dans l'application",
            },
            primaryPasteActionLinkText: "Ou collez le lien ci-dessous dans votre navigateur :",
            task_watcher: {
                added_subject: "Vous avez été ajouté en tant qu'observateur d'une tâche",
                watcher_added(guildName: string): string {
                    return `Vous avez été ajouté en tant qu'observateur d'une tâche dans l'espace de travail ${guildName}. Vous recevrez des notifications lorsqu'il y aura des changements dans cette tâche.`;
                },
                subject: "Notification de mise à jour de tâche",
                activity(guildName: string): string {
                    return `Une tâche que vous observez dans l'espace de travail ${guildName} a été modifiée.`;
                }
            },
            self_data_download_ready: {
                headline: "Vos données sont prêtes à être téléchargées",
                text: "Nous avons préparé vos données pour le téléchargement. Vous pouvez y accéder dans l'application. Le lien de téléchargement est disponible pendant deux semaines.",
            },
            payment_failed: {
                headline: "🚨 Action requise : Échec du paiement de l’abonnement Pro",
                text(guildName: string): string {
                    return `Nous n’avons pas pu traiter le paiement pour un ou plusieurs sièges Pro sur ${guildName}. Pour éviter de perdre l’accès aux fonctionnalités Pro, veuillez mettre à jour vos informations de paiement et régler votre facture dès maintenant. Vos fonctionnalités Pro seront bientôt désactivées si aucune action n’est entreprise. Besoin d’aide ? Contactez le support — nous sommes là pour vous.`;
                },
                primaryActionText: "Mettre à jour les informations de paiement"
            },
            open_app: "Ouvrir l'application",
        }
    }
}
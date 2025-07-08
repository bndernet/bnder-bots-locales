import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_nl {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `De deadline voor taak **${id}** ${taskTitle} is op ${deadline} in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Je bent toegewezen aan taak **${id}** ${taskText} in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Taak ${id} toegewezen`;
            },
            assigned_embed_footer: "Deze meldingen kunnen worden uitgeschakeld met het commando \"/preferences direct_messages\".",
            assigned_embed_button_in_progress: "Markeren als 'bezig'",
            assigned_embed_button_done: "Markeren als 'gereed'",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `De deadline voor taak **${id}** ${taskTitle} is verlopen in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `De taak **${id}** ${taskTitle} waaraan je bent toegewezen, is herhaald en moet opnieuw worden gedaan in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Taak ${id} herhaald`;
            },
            deadline_alert: "Taakdeadline",
            commented_embed_title(id: string): string {
                return `Reactie toegevoegd aan taak ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Een reactie is toegevoegd aan een taak in server [${guildName}](https://discord.com/channels/${guildId}) door ${author}: ${commentText}`;
            },
            comment_response_button: "Reageer op opmerking",
            stop_followup_reminder_button: "Stop follow-up herinnering",
            extend_deadline_by_one_day_button: "Deadline met 1 dag verlengen",
            extend_deadline_by_two_days_button: "Deadline met 2 dagen verlengen",
            extend_deadline_by_one_week_button: "Deadline met 1 week verlengen",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Je bent toegevoegd als toeschouwer aan taak **${id}** ${taskText} in server [${guildName}](https://discord.com/channels/${guildId}) door <@${addedBy}>. Je ontvangt meldingen wanneer er iets verandert in deze taak. Als je geen meldingen meer wilt ontvangen, kun je op de onderstaande knop klikken.`;
            },
            watcher_added_notification_unsubscribe_button: "Uitschrijven",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `De taak **${id}** ${taskTitle} die je volgt in server [${guildName}](https://discord.com/channels/${guildId}) is gewijzigd:`
            },
            watcher_notification_footer: "Schakel meldingen voor deze taak uit met het commando \"/task unwatch\"",
            watcher_embed_title(id: string): string {
                return `Taak ${id} bijgewerkt`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `De mijlpaal **${milestoneName}** is binnen 6 uur verschuldigd in server [${guildName}](https://discord.com/channels/${guildId}) en heeft taken die moeten worden voltooid.`;
            },
            status_todo: "Te doen",
            status_in_progress: "Bezig",
            status_done: "Gereed"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Deadline",
            assignees_field: "Toegewezenen",
            status_field: "Status",
            todos_field: "To-do's",
            delete_at_field: "Verwijderen op",
            project_field: "Project",
            topic_field: "Onderwerp",
            text_field: "Tekst",
            role_field: "Rol",
            permission_field: "Toestemming",
            user_field: "Gebruiker",
            preset_field: "Voorinstelling",
            priority_field: "Prioriteit",
            label_field: "Label",
            personal_field: "Persoonlijk",
            manager_field: "Manager",
            repeat_interval_field: "Herhaalinterval in dagen",
            repeat_end_date_field: "Einddatum herhaling",
            milestone_field: "Mijlpaal",
            due_date_field: "Vervaldatum",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Te doen";
                    case 1:
                        return "Bezig";
                    case 2:
                        return "Gereed";
                    default:
                        return "Onbekend";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Deadline voor taak ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `De deadline voor taak **${id}** is op ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Taak ${id} verwijderd.`;
                },
                description(id: string): string {
                    return `Taak ${id} is verwijderd.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Taak ${id} herhaald.`;
                },
                description(id: string): string {
                    return `Taak ${id} is herhaald en de status is ingesteld op 'te doen'.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Taak ${id} aangemaakt.`;
                },
                description(task_text: string, id: string): string {
                    return `Taak ${id} is aangemaakt met tekst: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Taak ${id} bijgewerkt.`;
                },
                description(id: string): string {
                    return `Taak ${id} is bijgewerkt en de volgende gegevens zijn gewijzigd.`;
                }
            },
            project_created: {
                title: "Project aangemaakt",
                description(projectName: string): string {
                    return `Project ${projectName} is aangemaakt`;
                }
            },
            project_deleted: {
                title: "Project verwijderd",
                description(projectName: string): string {
                    return `Project ${projectName} is verwijderd`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Status van taak ${id} gewijzigd`;
                }
            },
            permission_granted: {
                title: "Toestemming verleend",
            },
            permission_revoked: {
                title: "Toestemming ingetrokken",
            },
            preset_applied: {
                title: "Voorinstelling toegepast",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Deadline voor taak ${id} is verlopen`;
                }
            },
            project_updated: {
                title: "Project bijgewerkt",
                description(name: string): string {
                    return `Project ${name} is bijgewerkt`;
                }
            },
            test_message: {
                title: "Dit is een testbericht",
                description: "Als je dit bericht ziet, werkt de webhook correct en is de logging ingeschakeld."
            },
            comment_added: {
                title(id: string): string {
                    return `Reactie toegevoegd aan taak ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Reactie verwijderd uit taak ${id}`;
                }
            },
            topic_created: {
                title: "Onderwerp aangemaakt",
                description(name: string): string {
                    return `Onderwerp ${name} is aangemaakt`;
                }
            },
            topic_updated: {
                title: "Onderwerp bijgewerkt",
                description(name: string): string {
                    return `Onderwerp ${name} is bijgewerkt`;
                }
            },
            topic_deleted: {
                title: "Onderwerp verwijderd",
                description(name: string): string {
                    return `Onderwerp ${name} is verwijderd`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Document ${id} aangemaakt`;
                },
                description(name: string): string {
                    return `Document ${name} is aangemaakt`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Document ${id} bijgewerkt`;
                },
                description(name: string): string {
                    return `Document ${name} is bijgewerkt`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Document ${id} verwijderd`;
                },
                description(name: string): string {
                    return `Document ${name} is verwijderd`;
                }
            },
            label_created: {
                title: "Label aangemaakt",
                description(name: string): string {
                    return `Label ${name} is aangemaakt`;
                }
            },
            label_updated: {
                title: "Label bijgewerkt",
                description(name: string): string {
                    return `Label ${name} is bijgewerkt`;
                }
            },
            label_deleted: {
                title: "Label verwijderd",
                description(name: string): string {
                    return `Label ${name} is verwijderd`;
                }
            },
            attachments_field: "Bijlagen",
            milestone_created: {
                title: "Mijlpaal aangemaakt",
            },
            milestone_updated: {
                title: "Mijlpaal bijgewerkt",
            },
            milestone_deleted: {
                title: "Mijlpaal verwijderd",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `Het aankomende evenement (${id}) **${name}** begint over ${durationTillEventMinutes} minuten om ${startTime} in server [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Je bent uitgenodigd voor evenement ${eventId} door <@${inviterId}>: **${eventName}** begint om ${start} en eindigt om ${end}.\n-# Alle datums worden berekend in ${timezone}. Gebruik \"/settings timezone\" om de tijdzone voor de hele server te wijzigen, of \"/preferences timezone\" om je eigen tijdzone te wijzigen.`;
                },
                accept_button: "Accepteren",
                deny_button: "Weigeren"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> heeft evenement ${eventId} bijgewerkt: **${eventName}** begint om ${start} en eindigt om ${end}.\n-# Alle datums worden berekend in ${timezone}. Gebruik \"/settings timezone\" om de tijdzone voor de hele server te wijzigen, of \"/preferences timezone\" om je eigen tijdzone te wijzigen.`
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Gefeliciteerd! Je bent in een pro-plek geplaatst in server [${guildName}](<https://discord.com/channels/${guildId}>). Dit betekent dat je nu toegang hebt tot [pro-functies](<https://bnder.net/pricing>). Veel plezier!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Actie vereist: Betaling voor Pro-abonnement mislukt\nWe konden de betaling voor een of meer Pro-gebruikers op [${guildName}](<https://discord.com/channels/${guildId}>) niet verwerken. Om te voorkomen dat je toegang tot Pro-functies verliest, kun je [je betalingsgegevens bijwerken en je factuur nu betalen](<${customerPortalLink}>).\n\nJe Pro-functies worden binnenkort uitgeschakeld als je geen actie onderneemt.\n\nHulp nodig? [Neem contact op met de support](https://bnder.net/discord) — we staan voor je klaar.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Het bestand **${fileName}** is met je gedeeld in server [${guildName}](https://discord.com/channels/${guildId}) door <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `De map **${folderName}** is met je gedeeld in server [${guildName}](https://discord.com/channels/${guildId}) door <@${userId}>`;
            }
        },
        self_data_download_ready: "Je gegevens zijn klaar om te downloaden. Je kunt ze downloaden in [onze app](<https://bnder.net/app/>). De downloadlink is twee weken beschikbaar.",
        tutorial_tasks: {
            tutorial_label_name: "Tutorial",
            create_first_task_title: "Maak je eerste taak aan",
            create_first_task_description: "Begin met het aanmaken van een taak. Geef het een naam en optioneel een beschrijving.",
            change_task_status_title: "Wijzig de status van een taak",
            change_task_status_description: "Wijzig de status van een taak naar 'Bezig' of 'Klaar' door deze naar de juiste kolom te slepen.",
            invite_team_members_title: "Nodig je teamleden uit",
            invite_team_members_description: "Nodig je teamleden uit om lid te worden van je werkruimte. Ze zullen de uitnodiging zien in hun gebruikersinstellingen.",
            explore_workspace_title: "Verken de werkruimte",
            explore_workspace_description: "Verken de werkruimte en raak vertrouwd met de functies. Je kunt taken aanmaken, leden beheren en meer. Je kunt ook de instellingen bekijken om het datumformaat, de taal en de tijdzone aan te passen."
        },
        mails: {
            footer: {
                company_limited_liability: "beperkte aansprakelijkheid",
                company_address: "Im Flath 12 - 38542 Leiferde - Duitsland",
                company_register_court: "Rechtbank Hildesheim - HRB 209373",
                company_ceo: "Directeur: Jan Brinkmann",
                company_contact: "E-mail: contact@bnder.net - Telefoon: +49 511 45032009",
                legal_automated_email: "Deze e-mail is automatisch verzonden. Antwoord hier alstublieft niet op.",
                legal_privacy_policy_prefix: "Onze privacyverklaring is te vinden op",
                legal_imprint: "Colofon",
                legal_terms_of_use: "Gebruiksvoorwaarden",
                legal_privacy_policy: "Privacyverklaring",
            },
            verify_email: {
                headline: "Bevestig je e-mailadres",
                text: "Bevestig je e-mailadres door op de onderstaande link te klikken.",
                primaryActionText: "Bevestig e-mailadres",
            },
            password_changed: {
                headline: "Wachtwoord gewijzigd",
                text: "Je wachtwoord is succesvol gewijzigd. Als je deze wijziging niet zelf hebt aangevraagd, neem dan onmiddellijk contact op met support via contact@bnder.net.",
            },
            reset_password: {
                headline: "Wachtwoord opnieuw instellen",
                text: "Klik op de onderstaande knop om je wachtwoord opnieuw in te stellen. Als je hier niet om hebt gevraagd, kun je deze e-mail negeren.",
                primaryActionText: "Wachtwoord opnieuw instellen",
            },
            workspace_invitation: {
                headline: "Workspace-uitnodiging",
                text(workspaceName: string): string {
                    return `Je bent uitgenodigd voor de workspace ${workspaceName}. Klik op de onderstaande knop om de uitnodiging te accepteren en deel te nemen aan de workspace.`;
                },
                primaryActionText: "Deelnemen aan workspace",
            },
            task_assigned: {
                greeting(guildName: string): string {
                    return `Er is een taak aan u toegewezen in werkruimte ${guildName}.`;
                },
                no_deadline: "Er is geen deadline vastgesteld voor deze taak.",
                open_in_app: "Open in de app",
            },
            primaryPasteActionLinkText: "Of plak de onderstaande link in je browser:",
        }
    }
}
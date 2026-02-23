import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_pt_br {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `O prazo para a tarefa **${id}** ${taskTitle} vence em ${deadline} no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Você foi atribuído à tarefa **${id}** ${taskText} no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Tarefa ${id} atribuída`;
            },
            assigned_embed_footer: "Essas notificações podem ser desativadas por um administrador do espaço de trabalho usando o comando \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Marcar como em progresso",
            assigned_embed_button_done: "Marcar como feito",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `O prazo para a tarefa ${id} está atrasado no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `A tarefa **${id}** ${taskTitle} para a qual você foi designado foi repetida e precisa ser feita novamente no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tarefa ${id} repetida`;
            },
            deadline_alert: "Prazo da tarefa",
            commented_embed_title(id: string): string {
                return `Comentário adicionado à tarefa ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Um comentário foi adicionado a uma tarefa no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>) por ${author}: ${commentText}`;
            },
            comment_response_button: "Responder ao comentário",
            stop_followup_reminder_button: "Parar lembrete de acompanhamento",
            extend_deadline_by_one_day_button: "Prorrogar o prazo em 1 dia",
            extend_deadline_by_two_days_button: "Prorrogar o prazo em 2 dias",
            extend_deadline_by_one_week_button: "Prorrogar o prazo em 1 semana",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Você foi adicionado como assinante da tarefa **${id}** ${taskText} no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>) por <@${addedBy}>. Você receberá notificações quando houver mudanças nessa tarefa. Se quiser parar de receber notificações, clique no botão abaixo.`;
            },
            subscriber_added_notification_unsubscribe_button: "Cancelar inscrição",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `A tarefa **${id}** ${taskTitle} à qual você está inscrito no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>) foi alterada:`
            },
            subscriber_notification_footer: "Desative as notificações desta tarefa usando o comando \"/task unsubscribe\"",
            subscriber_embed_title(id: string): string {
                return `Tarefa ${id} atualizada`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `O marco **${milestoneName}** deve ser entregue em menos de 6 horas no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>) e tem tarefas que precisam ser concluídas.`;
            },
            status_todo: "Para fazer",
            status_in_progress: "Em progresso",
            status_done: "Feito",
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Prazo",
            assignees_field: "Atribuídos",
            status_field: "Estado",
            todos_field: "Para fazer",
            delete_at_field: "Excluir em",
            text_field: "Texto",
            project_field: "Projeto",
            topic_field: "Tópico",
            role_field: "Função",
            permission_field: "Permissão",
            user_field: "Usuário",
            preset_field: "Predefinição",
            priority_field: "Prioridade",
            label_field: "Rótulo",
            manager_field: "Gerente",
            repeat_interval_field: "Intervalo de repetição em dias",
            repeat_end_date_field: "Data de término da repetição",
            milestone_field: "Marco",
            due_date_field: "Data de vencimento",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "Em progresso";
                    case 2:
                        return "Feito";
                    default:
                        return "Desconhecido";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Prazo para a tarefa ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `O prazo para a tarefa **${id}** vence em ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tarefa ${id} excluída.`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi excluída da lixeira.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tarefa ${id} repetida.`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi repetida e o estado foi definido como todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tarefa ${id} criada.`;
                },
                description(task_text: string, id: string): string {
                    return `A tarefa ${id} foi criada com o texto: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tarefa ${id} atualizada.`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi atualizada e os seguintes dados foram alterados.`;
                }
            },
            project_created: {
                title: "Projeto criado",
                description(projectName: string): string {
                    return `Projeto ${projectName} foi criado`;
                }
            },
            project_deleted: {
                title: "Projeto excluído",
                description(projectName: string): string {
                    return `Projeto ${projectName} foi excluído`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Status da tarefa ${id} alterado`;
                }
            },
            permission_granted: {
                title: "Permissão concedida",
            },
            permission_revoked: {
                title: "Permissão revogada",
            },
            preset_applied: {
                title: "Preset aplicado",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `O prazo para a tarefa ${id} está atrasado`;
                }
            },
            project_updated: {
                title: "Projeto atualizado",
                description(name: string): string {
                    return `Projeto ${name} foi atualizado`;
                }
            },
            test_message: {
                title: "Esta é uma mensagem de teste",
                description: "Se você vê esta mensagem, o webhook está funcionando corretamente e o log está ativado."
            },
            comment_added: {
                title(id: string): string {
                    return `Comentário adicionado à tarefa ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Comentário excluído da tarefa ${id}`;
                }
            },
            topic_created: {
                title: "Tópico criado",
                description(topicName: string): string {
                    return `Tópico ${topicName} foi criado`;
                }
            },
            topic_updated: {
                title: "Tópico atualizado",
                description(topicName: string): string {
                    return `Tópico ${topicName} foi atualizado`;
                }
            },
            topic_deleted: {
                title: "Tópico excluído",
                description(topicName: string): string {
                    return `Tópico ${topicName} foi excluído`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Documento ${id} criado`;
                },
                description(name: string): string {
                    return `Documento ${name} foi criado`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Documento ${id} atualizado`;
                },
                description(name: string): string {
                    return `Documento ${name} foi atualizado`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Documento ${id} excluído`;
                },
                description(name: string): string {
                    return `Documento ${name} foi excluído`;
                }
            },
            label_created: {
                title: "Rótulo criado",
                description(name: string): string {
                    return `Rótulo ${name} foi criado`;
                }
            },
            label_updated: {
                title: "Rótulo atualizado",
                description(name: string): string {
                    return `Rótulo ${name} foi atualizado`;
                }
            },
            label_deleted: {
                title: "Rótulo excluído",
                description(name: string): string {
                    return `Rótulo ${name} foi excluído`;
                }
            },
            attachments_field: "Anexos",
            milestone_created: {
                title: "Marco criado",
            },
            milestone_updated: {
                title: "Marco atualizado",
            },
            milestone_deleted: {
                title: "Marco excluído",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `O próximo evento (${id}) **${name}** começará em ${durationTillEventMinutes} minutos às ${startTime} em [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Você foi convidado para o evento ${eventId} por <@${inviterId}>: **${eventName}** começando em ${start} e terminando em ${end}.\n-# Todas as datas são calculadas em ${timezone}. Use \"/settings timezone\" para alterar o fuso horário de todo o espaço de trabalho ou \"/preferences timezone\" para alterar o seu próprio.`;
                },
                accept_button: "Aceitar",
                deny_button: "Recusar"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> atualizou o evento ${eventId}: **${eventName}** começando em ${start} e terminando em ${end}.\n-# Todas as datas são calculadas em ${timezone}. Use \"/settings timezone\" para alterar o fuso horário de todo o espaço de trabalho ou \"/preferences timezone\" para alterar o seu próprio.`;
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `Sua reserva para ${workspaceName} começa em aproximadamente ${durationTillEventMinutes} minutos (${start} - ${end}, ${timezone}).${location}`;
                },
                title: "Lembrete de reserva próxima",
                manage_bookings_button: "Gerenciar reserva",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Parabéns! Você foi colocado em um assento profissional no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>). Isso significa que agora você tem acesso a [recursos profissionais](<https://bnder.net/pricing>). Aproveite!`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `O usuário **${requesterUsername}** solicitou um assento Pro no workspace [${guildName}](<https://discord.com/channels/${guildId}>). Se você tiver um assento Pro disponível, poderá concedê-lo usando o botão abaixo. Caso precise de mais assentos Pro, visite [as configurações do seu workspace](<https://bnder.net/app/settings/${guildId}/default?tab=1>) para fazer upgrade da assinatura.`;
        },
        request_pro_seat_button_label: "Conceder assento Pro",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Ação necessária: Falha no pagamento da assinatura Pro\nNão foi possível processar o pagamento de uma ou mais assinaturas Pro em [${guildName}](<https://discord.com/channels/${guildId}>). Para evitar perder o acesso aos recursos Pro, [atualize suas informações de pagamento e pague sua fatura agora](<${customerPortalLink}>).\n\nSeus recursos Pro serão desativados em breve se nenhuma ação for tomada.\n\nPrecisa de ajuda? [Entre em contato com o suporte](https://bnder.net/discord) — estamos aqui para ajudar.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `O arquivo **${fileName}** foi compartilhado no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>) por <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `A pasta **${folderName}** foi compartilhada no espaço de trabalho [${guildName}](<https://discord.com/channels/${guildId}>) por <@${userId}>`;
            }
        },
        self_data_download_ready: "Seus dados estão prontos para download. Você pode baixá-los em [nosso aplicativo](<https://bnder.net/app/>). O link para download fica disponível por duas semanas.",
        tutorial_tasks: {
            tutorial_label_name: "Tutorial",
            create_first_task_title: "Crie sua primeira tarefa",
            create_first_task_description: "Comece criando uma tarefa. Dê um nome e, opcionalmente, uma descrição.",
            change_task_status_title: "Alterar status da tarefa",
            change_task_status_description: "Altere o status de uma tarefa para 'Em andamento' ou 'Concluída' arrastando-a para a coluna respectiva.",
            invite_team_members_title: "Convide os membros da sua equipe",
            invite_team_members_description: "Convide os membros da sua equipe para entrar no seu espaço de trabalho. Eles verão o convite nas configurações do usuário.",
            explore_workspace_title: "Explore o espaço de trabalho",
            explore_workspace_description: "Explore o espaço de trabalho e familiarize-se com os recursos. Você pode criar tarefas, gerenciar membros e muito mais. Também pode dar uma olhada nas configurações para ajustar o formato da data, idioma e fuso horário."
        },
        mails: {
            footer: {
                company_limited_liability: "sociedade com responsabilidade limitada",
                company_address: "Im Flath 12 - 38542 Leiferde - Alemanha",
                company_register_court: "Tribunal de Registro de Hildesheim - HRB 209373",
                company_ceo: "Diretor Executivo: Jan Brinkmann",
                company_contact: "E-mail: contact@bnder.net - Telefone: +49 511 45032009",
                legal_automated_email: "Este e-mail foi enviado automaticamente. Por favor, não responda.",
                legal_privacy_policy_prefix: "Nossa política de privacidade está disponível em",
                legal_imprint: "Informações legais",
                legal_terms_of_use: "Termos de uso",
                legal_privacy_policy: "Política de privacidade",
            },
            verify_email: {
                headline: "Por favor, confirme seu endereço de e-mail",
                text: "Confirme seu endereço de e-mail clicando no link abaixo.",
                primaryActionText: "Confirmar e-mail",
            },
            password_changed: {
                headline: "Senha alterada",
                text: "Sua senha foi alterada com sucesso. Caso você não tenha feito essa alteração, entre em contato imediatamente com o suporte em contact@bnder.net.",
            },
            reset_password: {
                headline: "Redefinir senha",
                text: "Para redefinir sua senha, clique no botão abaixo. Se você não solicitou a redefinição, ignore este e-mail.",
                primaryActionText: "Redefinir senha",
            },
            workspace_invitation: {
                headline: "Convite para o workspace",
                text(workspaceName: string): string {
                    return `Você foi convidado para o workspace ${workspaceName}. Clique no botão abaixo para aceitar o convite e entrar no workspace.`;
                },
                primaryActionText: "Entrar no workspace",
            },
            task_assigned: {
                subject: "Você recebeu uma nova tarefa",
                greeting(guildName: string): string {
                    return `Você foi designado para uma tarefa no espaço de trabalho ${guildName}.`;
                },
                no_deadline: "Não há prazo definido para esta tarefa.",
                open_in_app: "Abra a tarefa no aplicativo",
            },
            primaryPasteActionLinkText: "Ou cole o link abaixo no seu navegador:",
            task_subscriber: {
                added_subject: "Você foi adicionado como assinante de uma tarefa",
                subscriber_added(guildName: string): string {
                    return `Você foi adicionado como assinante de uma tarefa no workspace ${guildName}. Você receberá notificações quando algo mudar nesta tarefa.`;
                },
                subject: "Notificação de atualização de tarefa",
                activity(guildName: string): string {
                    return `Uma tarefa que você assinou no workspace ${guildName} foi alterada.`;
                }
            },
            self_data_download_ready: {
                headline: "Seus dados estão prontos para download",
                text: "Preparamos seus dados para download. Você pode acessá-los no app. O link para download estará disponível por duas semanas.",
            },
            payment_failed: {
                headline: "🚨 Ação necessária: Falha no pagamento da assinatura Pro",
                text(guildName: string): string {
                    return `Não conseguimos processar o pagamento de um ou mais assentos Pro em ${guildName}. Para evitar perder acesso aos recursos Pro, atualize suas informações de pagamento e pague sua fatura agora. Seus recursos Pro serão desativados em breve se nenhuma ação for tomada. Precisa de ajuda? Contate o suporte — estamos aqui para você.`;
                },
                primaryActionText: "Atualizar informações de pagamento"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "Novo ticket:",
                subject_prefix_update: "Atualização do ticket:",
                subject_prefix_sla_warning: "Aviso de SLA do ticket:",
                subject_prefix_status(statusLabel: string): string {
                    return `Ticket ${statusLabel}:`;
                },
                body_created: "Um novo ticket foi criado.",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `Uma nova mensagem pública foi publicada.\n\nTicket: ${ticketTitle}\n\nPrévia da mensagem: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `O status do ticket mudou para \"${statusLabel}\".\n\nTicket: ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `O ticket foi fechado automaticamente porque nenhuma resposta do solicitante foi recebida dentro da janela de tempo configurada.\n\nTicket: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `Este ticket atingiu seu limite de aviso de SLA.\n\nTicket: ${ticketTitle}\nSLA: ${slaName}\nTempo atual: ${currentAge}\nMeta: ${targetAge}`;
                },
                action_open_ticket: "Abrir ticket",
                action_reply_to_ticket: "Responder ao ticket",
                action_unsubscribe: "Cancelar inscrição deste ticket",
                unknown_inbox_subject: "Endereço de caixa de entrada de tickets desconhecido",
                unknown_inbox_headline: "Endereço de caixa de entrada de tickets desconhecido",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `Recebemos seu e-mail para ${recipientAddress}, mas este endereço não está configurado para recebimento de tickets. Nenhum ticket foi criado.\n\nEntre em contato com sua equipe de suporte e peça o endereço de e-mail correto do projeto para tickets.`;
                },
                unknown_inbox_text_without_recipient: "Recebemos seu e-mail, mas este endereço não está configurado para recebimento de tickets. Nenhum ticket foi criado.\n\nEntre em contato com sua equipe de suporte e peça o endereço de e-mail correto do projeto para tickets.",
                feature_locked_subject: "O recurso de e-mail de tickets requer Pro",
                feature_locked_headline: "O recurso de e-mail de tickets requer Pro",
                feature_locked_text: "Recebemos sua resposta por e-mail, mas responder tickets por e-mail está disponível apenas em workspaces Pro. Sua resposta não foi adicionada ao ticket.\n\nEntre em contato com sua equipe de suporte e peça para fazer upgrade do workspace para Pro.",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `Novo ticket no projeto ${projectId}: ${ticketTitle}`;
                },
                project_member_headline: "Um novo ticket foi criado",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `Um novo ticket foi criado no projeto ${projectId}.\n\nTicket: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `Um novo ticket foi criado no projeto **${projectId}**.\nTicket: [${ticketTitle}](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `Sua resposta foi adicionada com sucesso à conversa do ticket.\n\nTicket: ${ticketTitle}`;
                },
            },

            open_app: "Abrir App",
        }
    }
}